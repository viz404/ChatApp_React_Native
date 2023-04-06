import {View, Text, Image} from "react-native";
import React from "react";

import {dark, light} from "./stylesSplash";

const logo = require("../../assets/images/chat-logo.png");

const Splash = () => {
  let theme = "dark";

  const styles = theme == "dark" ? dark : light;

  return (
    <View style={styles.main}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Loading......</Text>
      </View>
    </View>
  );
};

export default Splash;
