import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';

import Header from '../../components/header/header';

import styles from './style';
import {CharacterObj} from '../../@types';
import Card from '../../components/card/card';
import NotFound from '../../components/notFound/notFound';
import TagTitle from '../../components/tagTitle/tagTitle';
import BtnBack from '../../components/buttons/btnBack/btnBack';
import Button from '../../components/buttons/btnNavigation/btnNavigation';
import searchIcon from '../../../android/app/src/main/res/drawable/searchIcon.png';

interface paramsProps {
  page?: number;
  searchTerm?: string;
}
type keyCacheProps = {
  keyName: string;
};
type cacheListProps = {
  keyName: keyCacheProps[] | string;
  cacheList: CharacterObj[];
};

interface IResponse {
  data: {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: CharacterObj[];
  };
}

export default function DetailsScreen() {
  const [keyCache, setKeyCache] = useState<keyCacheProps[]>([]);
  const [cacheList, setCacheList] = useState<cacheListProps[]>([]);
  const [characters, setCharacters] = useState<CharacterObj[]>([]);
  const [charactersDefault, setCharactersDefault] = useState<CharacterObj[]>(
    [],
  );
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterObj[]>(
    [],
  );

  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [IsFiltered, setIsFiltered] = useState(false);
  const [notFound, setNotFound] = useState<Boolean>(false);
  //getCharacters
  async function fetchGetCharacters({page, searchTerm}: paramsProps) {
    let response: IResponse;

    try {
      setLoading(true);
      response = await axios.get(
        `https://rickandmortyapi.com/api/character/?${
          page ? `page=${page}` : `name=${searchTerm}`
        }`,
      );
      console.log(response.data.results);
      if (page) setHasNextPage(!!response.data.info.next);
      if (page === 1) setCharactersDefault(response.data.results);
      setCharacters(prevCharacters => [
        ...prevCharacters,
        ...response.data.results,
      ]);

      setLoading(false);
      setNotFound(false);
      return response;
    } catch (error) {
      setLoading(false);
      console.log('error', error);
      setNotFound(true);
    }
  }

  async function handleOnPressSearch() {
    if (!inputValue) {
      setCharacters(charactersDefault);
      setNotFound(false);
      return setIsFiltered(false);
    }
    const existigKey = keyCache.some(({keyName}) => {
      return keyName == inputValue.trim().toLowerCase();
    });

    if (existigKey) {
      let filteredResult = cacheList.filter(cache => {
        return cache.keyName.includes(inputValue.trim().toLowerCase());
      });

      if (filteredResult.length >= 1) {
        setFilteredCharacters(filteredResult[0].cacheList);
        setIsFiltered(true);
      }
    } else {
      const response = await fetchGetCharacters({searchTerm: inputValue});

      if (response?.data && response.data.results.length >= 1) {
        setCacheList(prev => {
          return [
            ...prev,
            {
              keyName: inputValue,
              cacheList: response.data.results,
            },
          ];
        });
        setKeyCache(prev => {
          return [...prev, {keyName: inputValue}];
        });

        setFilteredCharacters(response.data.results);
        setIsFiltered(true);
      }
    }
  }
  ///
  //CACHE LIST
  async function onNextPagina() {
    try {
      if (hasNextPage) {
        setLoading(true);
        setCurrentPage(currentPage => currentPage + 1);
        setLoading(false);
      }
    } catch (error) {
      console.log('error:', error);
    }
  }

  React.useEffect(() => {
    (async () => {
      await fetchGetCharacters({page: currentPage});
    })();
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.container}>
      <BtnBack />
      <Header />
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Find a Character"
          placeholderTextColor="#FFFFFF"
          onChangeText={setInputValue}
          value={inputValue}
        />
        <TouchableOpacity
          style={styles.iconSearch}
          onPress={handleOnPressSearch}>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TagTitle textTitle="Characters" />

      {loading && (
        <ActivityIndicator
          size="large"
          color="#757575"
          style={{alignSelf: 'center'}}
        />
      )}
      {notFound ? (
        <NotFound />
      ) : (
        <FlatList
          data={IsFiltered ? filteredCharacters : characters}
          ListFooterComponent={() =>
            hasNextPage &&
            !IsFiltered && (
              <Button onPress={() => onNextPagina()} title="Load More" />
            )
          }
          onEndReachedThreshold={0.1}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <Card cardObj={item} />}
        />
      )}
    </SafeAreaView>
  );
}
