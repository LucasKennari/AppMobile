import React from 'react';
import imgHomeBackground from '../../../assets/imgHomeBackground/homeBackground.jpg';
import {ImageBackground, SafeAreaView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/buttons/btnNavigation/btnNavigation';
import styles from './style';

export default function HomeScreen() {
  const {navigate} = useNavigation();

  function handleFindCharacters() {
    navigate('Details');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={imgHomeBackground} style={styles.image}>
        <Button title="FIND CHARACTERS" onPress={handleFindCharacters} />
      </ImageBackground>
    </SafeAreaView>
  );
}
