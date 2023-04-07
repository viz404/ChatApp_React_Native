import firestore from "@react-native-firebase/firestore";

const addNewUser = async (user: any) => {
  try {
    await firestore().collection("Users").doc(user.uid).set(user);
    return true;
  } catch (error) {
    console.log("Error in addNewUser");
    console.log(error);
    return false;
  }
};

export default addNewUser;
