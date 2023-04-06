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
  },
  headerText: {
    fontSize: 24,
  },
  popupContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#333232",
    padding: 15,
    borderRadius: 5,
    gap: 10,
  },
  popupText: {
    fontSize: 16,
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
  },
  headerText: {
    fontSize: 24,
  },
  popupContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#333232",
    padding: 15,
    borderRadius: 5,
    gap: 10,
  },
  popupText: {
    fontSize: 16,
  },
});
