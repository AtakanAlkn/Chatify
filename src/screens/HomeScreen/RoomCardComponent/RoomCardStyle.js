import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceSize.height / 8,
    margin: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
