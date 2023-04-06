import auth from "@react-native-firebase/auth";

const updateProfileInfo = async (displayName: string, photoURL: string) => {
  await auth().currentUser?.updateProfile({
    displayName,
    photoURL,
  });
};

export default updateProfileInfo;
