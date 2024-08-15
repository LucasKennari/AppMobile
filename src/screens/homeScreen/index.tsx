import React from 'react';
import imgHomeBackground from '../../../assets/imgHomeBackground/homeBackground.jpg';
import {View, ImageBackground} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/buttons/btnNavigation/btnNavigation';
import styles from './style';

const route = 'Details';
export default function HomeScreen() {
  const {navigate} = useNavigation();

  function handleNavigation() {
    navigate('Details');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgHomeBackground}
        resizeMode="cover"
        style={styles.image}>
        <Button title="FIND CHARACTERS" onPress={handleNavigation} />
      </ImageBackground>
    </View>
  );
}
