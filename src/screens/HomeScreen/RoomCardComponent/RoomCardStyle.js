import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    height: deviceSize.height / 8,
    margin: 10,
    backgroundColor: '#2B8761',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  creator: {
    textAlign: 'left',
    color: 'white',
  },
  date: {
    color: 'white',
    textAlign: 'right',
  },
});
