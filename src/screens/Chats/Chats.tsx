import {View, Text, Pressable, TouchableOpacity} from "react-native";
import React, {useState} from "react";

import Entypo from "react-native-vector-icons/Entypo";
import auth from "@react-native-firebase/auth";

import {dark, light} from "./stylesChats";

const Chats = ({navigation}: any) => {
  const [popupVisible, setpopupVisible] = useState(false);

  let theme = "dark";

  const styles = theme == "dark" ? dark : light;

  const togglePopup = () => {
    setpopupVisible(!popupVisible);
  };

  const popupBlur = () => {
    if (popupVisible) {
      setpopupVisible(false);
    }
  };

  const openNewChat = () => {
    setpopupVisible(false);
    navigation.navigate("NewChat");
  };

  const signout = () => {
    // dispatch signout
    auth().signOut();
  };

  return (
    <Pressable style={styles.main} onPress={popupBlur}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Messages</Text>
        <Entypo name="dots-three-vertical" size={20} onPress={togglePopup} />
        <View
          style={[
            styles.popupContainer,
            {display: popupVisible ? "flex" : "none"},
          ]}>
          <TouchableOpacity>
            <Text style={styles.popupText} onPress={openNewChat}>
              New Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.popupText}>New Group</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signout}>
            <Text style={styles.popupText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </Pressable>
  );
};

export default Chats;
