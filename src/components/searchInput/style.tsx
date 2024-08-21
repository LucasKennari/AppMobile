import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputSection: {
    marginVertical: 16.16,
    marginHorizontal: 29,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    // alignSelf: 'center',
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
    width: 45,
    height: 45,
    borderWidth: 2,
    left: 280,
    top: 7,
    position: 'absolute',
  },
});

export default styles;
