import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3A40',
    paddingTop: 16,
  },
  inputSection: {
    marginVertical: 16.16,
    marginHorizontal: 29,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  input: {
    flex: 1,
    paddingLeft: 13,
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    lineHeight: 27.28,
    backgroundColor: '#407772',
    color: '#FFFFFF',

    borderRadius: 10,
  },
  iconSearch: {
    flexDirection: 'row',
    width: 40,
    height: 57,
    left: 290,

    position: 'absolute',
  },
  icon: {
    alignSelf: 'center',
    width: 35,
    height: 45,
  },
});
export default styles;
