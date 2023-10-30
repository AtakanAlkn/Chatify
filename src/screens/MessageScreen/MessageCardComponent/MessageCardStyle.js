import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#2B8761',
    borderRadius: 8,
    marginVertical: 10,
    padding: 8,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sender: {
    fontStyle: 'italic',
    color: 'white',
    fontSize: 14,
  },
  date: {
    fontStyle: 'italic',
    color: 'white',
  },
  message: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
