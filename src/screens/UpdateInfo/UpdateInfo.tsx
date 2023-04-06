import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, {useState} from "react";

import {launchImageLibrary} from "react-native-image-picker";
import {useDispatch, useSelector} from "react-redux";

import {TagPress} from "../../components";
import uploadProfilePicture from "../../firebaseHelpers/uploadProfilePicture";
import updateProfileInfo from "../../firebaseHelpers/updateProfileInfo";
import {updateUserInfoAction} from "../../reduxStore/user/userActions";

const backgroudImageDark = require("../../assets/images/update-profile-dark.png");
const backgroudImageLight = require("../../assets/images/update-profile-light.png");

import {dark, light} from "./stylesUpdateInfo";

const UpdateInfo = () => {
  const [displayName, setDisplayName] = useState("");
  const [photo, setPhoto] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const defaultImage = `https://ui-avatars.com/api/?background=random&name=${displayName
    .split(" ")
    .join("+")}&rounded=true&size=128`;

  const {uid} = useSelector((store: any) => store.user);

  const dispatch = useDispatch();

  let theme = "dark";

  const styles = theme == "dark" ? dark : light;

  const handleProfilePress = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        selectionLimit: 1,
        includeBase64: false,
      },
      response => {
        if (response.assets) {
          setPhoto(response.assets[0]);
        }
      },
    );
  };

  const resetProfile = () => {
    setPhoto(null);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      let downloadUrl = photo?.uri || defaultImage;

      if (photo) {
        downloadUrl = await uploadProfilePicture(photo.uri, uid);
      }

      await updateProfileInfo(displayName, downloadUrl);

      const userInfoPayload = {
        displayName,
        photoURL: downloadUrl,
      };

      dispatch(updateUserInfoAction(userInfoPayload));
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={theme == "dark" ? backgroudImageDark : backgroudImageLight}
      style={styles.main}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextBold}>Just one more step</Text>
        <Text style={styles.headerText}>
          Please provide your name and an optional profile picture
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.profileContainer}>
          <Pressable onPress={handleProfilePress} disabled={loading}>
            <Image
              source={{
                uri: photo?.uri || defaultImage,
              }}
              style={styles.profile}
            />
          </Pressable>
          {photo && <TagPress title="Remove" onPress={resetProfile} />}
        </View>
        <TextInput
          value={displayName}
          onChangeText={setDisplayName}
          placeholder="Enter your name"
          style={styles.inputBox}
          placeholderTextColor="grey"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={displayName ? false : true || !loading}>
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <Text style={styles.buttonText}>Proceed</Text>
          )}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default UpdateInfo;
