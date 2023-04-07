import {StyleSheet} from "react-native";

export const dark = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#212121",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    color: "white",
  },
  contactsContainer: {
    flex: 1,
    position: "relative",
  },
  popupContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  popupContent: {
    borderRadius: 5,
    backgroundColor: "#333232",
    padding: 15,
  },
  popupText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 5,
  },
  popupButton: {
    backgroundColor: "#60bf4b",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  popupButtonText: {
    fontSize: 15,
    color: "white",
  },
  selectedUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  selectedUserImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  selectedUserInfo: {},
  selectedUserName: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export const light = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    color: "black",
  },
  contactsContainer: {
    flex: 1,
    position: "relative",
  },
  popupContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  popupContent: {
    borderRadius: 5,
    backgroundColor: "#DDF7E3",
    padding: 15,
  },
  popupText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 5,
    color: "black",
  },
  popupButton: {
    backgroundColor: "#40513B",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  popupButtonText: {
    fontSize: 15,
    color: "white",
  },
  selectedUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  selectedUserImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  selectedUserInfo: {},
  selectedUserName: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
