import {StyleSheet} from 'react-native';

export const dark = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  logo: {
    height: 600,
    width: 300,
    borderRadius: 10,
  },
  textContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});

export const light = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: 600,
    width: 300,
    borderRadius: 10,
  },
  textContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
});
