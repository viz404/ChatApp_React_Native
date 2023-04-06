import {View, Text, Button} from "react-native";
import React from "react";

import auth from "@react-native-firebase/auth";

import {dark, light} from "./stylesChats";

const Chats = () => {
  let theme = "dark";

  const styles = theme == "dark" ? dark : light;

  return (
    <View style={styles.main}>
      <Text>Chats</Text>
    </View>
  );
};

export default Chats;
