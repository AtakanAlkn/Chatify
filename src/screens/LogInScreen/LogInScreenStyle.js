import {StyleSheet, Dimensions} from 'react-native';
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: screenHeight / 8,
    paddingBottom: screenHeight / 18,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 35,
    marginBottom: 20,
    color: '#1E293B',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgot: {
    fontSize: 14,
    textAlign: 'right',
    color: '#3C9AFB',
    textDecorationLine: 'underline',
    marginBottom: 40,
  },
});

export default styles;
