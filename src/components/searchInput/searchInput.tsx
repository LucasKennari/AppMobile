import {Image, TextInput, View} from 'react-native';
import React from 'react';
import styles from './style';

import searchIcon from '../../../android/app/src/main/res/drawable/searchIcon.png';

const textHolder: string = 'Find a Character';

interface SearchInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
  inputValue,
  setInputValue,
}: SearchInputProps) {
  return (
    <View style={styles.inputSection}>
      <TextInput
        style={styles.input}
        placeholder={textHolder}
        placeholderTextColor="#FFFFFF"
        onChangeText={setInputValue}
        value={inputValue}></TextInput>
      <Image source={searchIcon} style={styles.iconSearch} />
    </View>
  );
}
