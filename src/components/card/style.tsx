import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 262,
    height: 399,
    alignSelf: 'center',
    marginVertical: 27,
  },
  card: {
    width: 280,
    height: 385,

    alignSelf: 'center',
    backgroundColor: '#0D7C85',

    borderColor: '#EBFF6E',
    borderRadius: 15,
    borderWidth: 3,
  },
  photoIcon: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    top: -30,
    borderRadius: 150 / 2,

    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  cardTitle: {
    width: '100%',
    height: 42,
    fontFamily: 'monospace',
    color: '#EBFF6E',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 34.1,
    textAlign: 'center',
    marginVertical: 3,
  },
  cardType: {
    width: 159,
    height: 42,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: '#FFFFFF',
    alignSelf: 'center',
    marginVertical: 3,
  },
  locationContainer: {
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  span: {
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 27.28,
    textAlign: 'center',
  },
  location: {
    fontSize: 20,
    lineHeight: 27.28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flexWrap: 'wrap',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default styles;
