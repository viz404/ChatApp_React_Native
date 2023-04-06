import {StyleSheet} from "react-native";

export const dark = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#212121",
  },
  logoContainer: {
    paddingVertical: "10%",
  },
  logo: {
    height: 200,
    width: 200,
  },
  headerContainer: {
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  header: {
    fontSize: 27,
    color: "white",
  },
  headerBold: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: "5%",
    color: "white",
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: "5%",
    gap: 20,
  },
  inputBoxContainer: {},
  inputBox: {
    borderWidth: 0.5,
    borderColor: "#60bf4b",
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  errorText: {
    color: "red",
    marginLeft: 5,
  },
  registerContainer: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
  },
  registerTextBold: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  signinButtonContainer: {
    padding: "5%",
  },
  signinButton: {
    backgroundColor: "#60bf4b",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  signinButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
});

export const light = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContainer: {
    paddingVertical: "10%",
  },
  logo: {
    height: 200,
    width: 200,
  },
  headerContainer: {
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  header: {
    fontSize: 27,
    color: "black",
  },
  headerBold: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: "5%",
    color: "black",
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: "5%",
    gap: 20,
  },
  inputBoxContainer: {},
  inputBox: {
    borderWidth: 0.5,
    borderColor: "#60bf4b",
    borderRadius: 10,
    padding: 10,
    color: "black",
  },
  errorText: {
    color: "red",
    marginLeft: 5,
  },
  registerContainer: {
    padding: "2%",
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  registerButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
  },
  registerTextBold: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  signinButtonContainer: {
    padding: "5%",
  },
  signinButton: {
    backgroundColor: "#60bf4b",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  signinButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
});
