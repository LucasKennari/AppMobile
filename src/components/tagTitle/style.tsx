import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tagContainer: {
    width: 262,

    flexDirection: 'row',
    alignSelf: 'stretch',
    alignContent: 'space-evenly',

    marginHorizontal: 35,
    paddingBottom: 10,
  },

  tagText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 30,
  },
  line: {
    width: 160,
    alignSelf: 'center',
    top: 1,
    marginHorizontal: 20,
    lineHeight: 20,
    borderWidth: 1.2,
    borderRadius: 3,
    borderColor: '#EBFF6E',
  },
});

export default styles;
