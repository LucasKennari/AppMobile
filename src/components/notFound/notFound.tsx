import {Image, StyleSheet, Text, View} from 'react-native';
import notFound from '../../../assets/notFound/notfound2.png';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function NotFound() {
  return (
    <SafeAreaView style={styles.viewNotFound}>
      <Text style={styles.textNotFound}>404</Text>
      <Image source={notFound} style={styles.imgNotFound} />
      <Text style={styles.textNotFound}> NOT FOUND </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewNotFound: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imgNotFound: {
    width: '70%',
    height: 270,
    alignSelf: 'center',
    paddingHorizontal: 5,
    marginVertical: 6,
  },
  textNotFound: {
    alignSelf: 'center',

    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 40,

    color: '#FFFFFF',

    marginVertical: 6,
    paddingHorizontal: 2,
  },
});
