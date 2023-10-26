import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    height: deviceSize.height / 3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
  },
  chooseColor: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorBox: {
    height: 30,
    width: 30,
    borderRadius: 2,
    marginHorizontal: 6,
    backgroundColor: 'red',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  text: {
    marginBottom: 10,
    color: 'red',
  },
});
