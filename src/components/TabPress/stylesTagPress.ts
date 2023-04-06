import {StyleSheet} from 'react-native';

export const dark = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
  button: {},
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const light = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  title: {
    color: 'black',
  },
  button: {},
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
