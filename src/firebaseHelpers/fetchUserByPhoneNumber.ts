import firestore from "@react-native-firebase/firestore";

const fetchUserByPhoneNumber = async (phoneNumber: string) => {
  try {
    let response = await firestore()
      .collection("Users")
      .where("phoneNumber", "==", phoneNumber)
      .get();

    if (response.size > 0) {
      return response.docs[0].data();
    }

    return null;
  } catch (error) {
    console.log("Error in fetchUserByPhoneNumber.ts");
    console.log(error);
    return null;
  }
};

export default fetchUserByPhoneNumber;
