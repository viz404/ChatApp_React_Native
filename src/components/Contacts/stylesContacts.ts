import {StyleSheet} from "react-native";

export const dark = StyleSheet.create({
  contactContainer: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  contactName: {
    color: "white",
    fontSize: 19,
  },
  phoneNumber: {
    color: "grey",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
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
  },
  searchInput: {
    flex: 1,
    margin: 0,
    fontSize: 15,
    color: "white",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export const light = StyleSheet.create({
  contactContainer: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  contactName: {
    color: "black",
    fontSize: 19,
  },
  phoneNumber: {
    color: "grey",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
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
  },
  searchInput: {
    flex: 1,
    margin: 0,
    fontSize: 15,
    color: "black",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
