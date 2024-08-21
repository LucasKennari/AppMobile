import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import line from '../../../assets/imgHeaderLogo/Line 2.png';
import styles from './style';

interface TagTitleProps {
  textTitle: string;
}

export default function TagTitle({textTitle}: TagTitleProps) {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{textTitle}</Text>
      <View style={styles.line}></View>
    </View>
  );
}
