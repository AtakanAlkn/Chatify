import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: screenHeight / 8,
    paddingBottom: screenHeight / 18,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 35,
    marginBottom: 20,
    color: '#1E293B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    flexDirection: 'row',
  },
  bottom: {
    marginTop: 40,
  },
  bottomText: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
