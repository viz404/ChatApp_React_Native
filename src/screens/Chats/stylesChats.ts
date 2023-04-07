import {StyleSheet} from "react-native";

export const dark = StyleSheet.create({
  main: {
    padding: 5,
    flex: 1,
    backgroundColor: "#212121",
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: "white",
  },
  popupContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#333232",
    padding: 15,
    borderRadius: 5,
    gap: 10,
    zIndex: 5,
  },
  popupText: {
    color: "white",
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333232",
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    zIndex: -1,
  },
  searchInput: {
    flex: 1,
    margin: 0,
    fontSize: 15,
    color: "white",
  },
  chatContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    width: "70%",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  button: {
    backgroundColor: "#60bf4b",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});

export const light = StyleSheet.create({
  main: {
    padding: 5,
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: "black",
  },
  popupContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#333232",
    padding: 15,
    borderRadius: 5,
    gap: 10,
    zIndex: 5,
  },
  popupText: {
    color: "black",
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#333232",
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    zIndex: -1,
  },
  searchInput: {
    flex: 1,
    margin: 0,
    fontSize: 15,
    color: "black",
  },
  chatContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    width: "70%",
    textAlign: "center",
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "#60bf4b",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
