import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 100,
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#2B8761',
    },
    title: {
      ...baseStyle.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
      borderWidth: 0.5,
    },
    title: {
      ...baseStyle.title,
      color: '#2B8761',
      marginLeft: 20,
    },
  }),
  tertiary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
      borderWidth: 2,
    },
    title: {
      ...baseStyle.title,
      color: '#2B8761',
      marginLeft: 20,
    },
  }),
};
