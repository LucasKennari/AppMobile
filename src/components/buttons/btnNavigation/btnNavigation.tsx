import React, {Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
type ButtonProps = {
  title?: string;
  onPress: () => void;
};

export default function Button({onPress, title}: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.btnHome}>
        <Text style={styles.textBtnHome}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
