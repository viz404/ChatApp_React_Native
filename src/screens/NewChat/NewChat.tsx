import {View, Text} from "react-native";
import React, {useEffect} from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

import {dark, light} from "./stylesNewChat";
import {Contacts} from "../../components";

const NewChat = ({navigation}: any) => {
  let theme = "dark";

  const styles = theme == "dark" ? dark : light;

  const handleContactPress = (phoneNumber: string) => {
    phoneNumber.replace(" ", "");
    console.log(phoneNumber);
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="#60bf4b"
          onPress={navigateBack}
        />
        <Text style={styles.headerText}>Contacts</Text>
      </View>
      <Contacts onPress={handleContactPress} />
    </View>
  );
};

export default NewChat;
