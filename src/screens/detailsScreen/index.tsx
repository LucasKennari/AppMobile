import * as React from 'react';
import {FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import axios from 'axios';

import Header from '../../components/header/header';

import SearchInput from '../../components/searchInput/searchInput';

import styles from './style';
import {CharacterObj} from '../../@types';
import Card from '../../components/card/card';
import NotFound from '../../components/notFound/notFound';
import TagTitle from '../../components/tagTitle/tagTitle';
import BtnBack from '../../components/buttons/btnBack/btnBack';
import Button from '../../components/buttons/btnNavigation/btnNavigation';

interface paramsProps {
  page: number;
}

export default function DetailsScreen() {
  const [characters, setCharacters] = React.useState<CharacterObj[]>([]);
  const [filteredCharacters, setFilteredCharacters] = React.useState<
    CharacterObj[]
  >([]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [found, setFound] = React.useState(false);
  const [endList, setEndList] = React.useState(false);
  const [count, setCount] = React.useState(1);

  async function handleFindCharacter({page}: paramsProps) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page} `,
      );
      setCharacters(characters => [...characters, ...response.data.results]);

      setHasNextPage(!!response.data.info.next);
      setLoading(false);
      setFound(true);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  }

  async function SearchInLocal() {
    let result = characters.filter(({name}) =>
      name.toLowerCase().includes(inputValue.trim().toLowerCase()),
    );
    setFilteredCharacters(result);
    setFound(true);
    if (result.length === 0) handleSearchInApi(inputValue);
  }

  async function handleSearchInApi(inputValue: string) {
    while (count <= 42 && hasNextPage) {
      await handleFindCharacter({page: currentPage});

      let result = characters.filter(({name}) =>
        name.toLowerCase().includes(inputValue.trim().toLowerCase()),
      );

      if (result.length > 0) {
        setFilteredCharacters(result);
        break;
      }
      if (result.length === 0 && count <= 42) {
        setCurrentPage(current => current + 1);
        setCount(count => count + 1);
        return;
      }
      setFound(false);
    }
  }

  const onNextPagina = React.useCallback(async () => {
    console.log('clicou');
    try {
      if (hasNextPage) {
        setCurrentPage(count => (count += 1));
        setLoading(true);
        const response = await handleFindCharacter({
          page: currentPage + 1,
        });
        setLoading(false);
        return response;
      }
    } catch (error) {
      console.log('error:', error);
    }
  }, [currentPage, inputValue]);

  React.useEffect(() => {
    (async () => {
      if (inputValue) SearchInLocal();
      else {
        await handleFindCharacter({page: currentPage});
      }
    })();
  }, [inputValue, currentPage]);

  return (
    <SafeAreaView style={styles.container}>
      <BtnBack />
      <Header />
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <TagTitle textTitle="Characters" />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#757575"
          style={{alignSelf: 'center'}}
        />
      ) : (
        found && (
          <FlatList
            ListEmptyComponent={<NotFound />}
            data={
              inputValue.length > 1 && filteredCharacters
                ? filteredCharacters
                : characters
            }
            ListFooterComponent={() =>
              endList && hasNextPage ? (
                <Button onPress={onNextPagina} title="Load More" />
              ) : null
            }
            onEndReachedThreshold={0.5}
            onEndReached={() => setEndList(true)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => <Card cardObj={item} />}
          />
        )
      )}
    </SafeAreaView>
  );
}
