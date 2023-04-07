import {
  View,
  Text,
  Alert,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {useState} from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

import {dark, light} from "./stylesNewChat";
import {Contacts} from "../../components";
import filterPhoneNumber from "../../components/helperFunctions/filterPhoneNumber";
import {useSelector} from "react-redux";
import fetchUserByPhoneNumber from "../../firebaseHelpers/fetchUserByPhoneNumber";

const NewChat = ({navigation}: any) => {
  const [searchUser, setSearchUser] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false);
  const {theme} = useSelector((store: any) => store.theme);

  const styles = theme == "dark" ? dark : light;

  const handleContactPress = async (phoneNumber: string) => {
    phoneNumber = filterPhoneNumber(phoneNumber);
    try {
      let response = await fetchUserByPhoneNumber(phoneNumber);
      setSearchUser(response);
      setShowPopup(true);
    } catch (error: any) {
      console.log("Error in NewChat.tsx/handleContactPress");
      console.log(error);
      Alert.alert("Error", error.message);
    }
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const closePopup = () => {
    if (showPopup) {
      setShowPopup(false);
      setSearchUser(null);
    }
  };

  const handleChat = () => {};

  return (
    <Pressable style={styles.main} onPress={closePopup}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="#60bf4b"
          onPress={navigateBack}
        />
        <Text style={styles.headerText}>Contacts</Text>
      </View>
      <View style={styles.contactsContainer}>
        <Contacts onPress={handleContactPress} />
        {showPopup && (
          <View style={styles.popupContainer}>
            <View style={styles.popupContent}>
              {searchUser ? (
                <View style={styles.selectedUserContainer}>
                  <Image
                    source={{uri: searchUser?.photoURL}}
                    style={styles.selectedUserImage}
                  />
                  <View style={styles.selectedUserInfo}>
                    <Text style={styles.selectedUserName}>
                      {searchUser.displayName}
                    </Text>
                    <TouchableOpacity
                      style={styles.popupButton}
                      onPress={handleChat}>
                      <Text style={styles.popupButtonText}>Chat</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <>
                  <Text style={styles.popupText}>
                    The contact you've selected does not appear to be a user,
                    please invite them
                  </Text>
                  <TouchableOpacity style={styles.popupButton}>
                    <Text style={styles.popupButtonText}>Invite</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default NewChat;
