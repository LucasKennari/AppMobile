import React, {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import imageLogo from '../../../assets/imgHeaderLogo/Header.png';
import styles from './style';
import TagTitle from '../tagTitle/tagTitle';

export default function Header() {
  return (
    <>
      <Image source={imageLogo} style={styles.logo} />
    </>
  );
}
