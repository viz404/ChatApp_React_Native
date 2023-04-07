import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import React, {useState} from "react";

import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import auth from "@react-native-firebase/auth";

import {dark, light} from "./stylesChats";
import {useDispatch, useSelector} from "react-redux";
import {signoutUserAction} from "../../reduxStore/user/userActions";

const Chats = ({navigation}: any) => {
  const [popupVisible, setpopupVisible] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [search, setSearch] = useState("");

  const {theme} = useSelector((store: any) => store.theme);

  const dispatch = useDispatch();

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
    auth().signOut();
    dispatch(signoutUserAction());
  };

  return (
    <Pressable style={styles.main} onPress={popupBlur}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Messages</Text>
        <Entypo
          name="dots-three-vertical"
          size={20}
          color="#60bf4b"
          onPress={togglePopup}
        />
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
      <View style={styles.searchContainer}>
        <EvilIcons name="search" size={30} color="grey" />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search for a user"
          style={styles.searchInput}
          onSubmitEditing={Keyboard.dismiss}
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.chatContainer}>
        {conversations.length == 0 && (
          <View style={styles.loadingContainer}>
            <Text style={styles.welcomeText}>
              Hi, press the button below to text someone from your contacts
            </Text>
            <TouchableOpacity style={styles.button} onPress={openNewChat}>
              <Text style={styles.buttonText}>Contacts</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Chats;
