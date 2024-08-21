import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import arrowBack from '../../../../assets/arrowBack/Vector.png';
export default function BtnBack() {
  const {navigate} = useNavigation();

  function goHomeOnPress() {
    navigate('Home');
  }

  return (
    <>
      <TouchableOpacity
        onPress={goHomeOnPress}
        activeOpacity={0.8}
        style={styles.arrowBack}>
        <Image source={arrowBack} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  arrowBack: {
    width: 11,
    height: 19,
    marginTop: 13,
    marginBottom: 16,
    marginHorizontal: 36,
  },
});
