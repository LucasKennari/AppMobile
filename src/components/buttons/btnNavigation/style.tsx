import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'flex-end',
    alignItems: 'center',

    marginBottom: 45,
  },
  btnHome: {
    width: 281,
    height: 90,

    alignContent: 'center',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#0D7C85',

    borderWidth: 4,
    borderColor: '#EBFF6E',
    borderRadius: 15,
    borderStyle: 'solid',

    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
  },
  textBtnHome: {

    color: '#EBFF6E',
    fontFamily: 'monospace',
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 43.85,
  },
});

export default styles;
