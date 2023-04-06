import {StyleSheet} from 'react-native';

export const dark = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#212121',
  },
  headerContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    gap: 10,
  },
  headerText: {
    fontSize: 17,
    color: 'white',
  },
  headerTextBold: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    paddingHorizontal: '10%',
    paddingTop: '20%',
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-end',
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  inputBox: {
    borderWidth: 0.5,
    borderColor: '#60bf4b',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#60bf4b',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
});

export const light = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    gap: 10,
  },
  headerText: {
    fontSize: 17,
    color: 'black',
  },
  headerTextBold: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    paddingHorizontal: '10%',
    paddingTop: '20%',
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-end',
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  inputBox: {
    borderWidth: 0.5,
    borderColor: '#60bf4b',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    color: 'black',
  },
  button: {
    backgroundColor: '#60bf4b',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
});
