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
});
