import firestore from "@react-native-firebase/firestore";

const fetchUserById = async (id: string) => {
  try {
    let response = await firestore().collection("Users").doc(id).get();
    if (response.exists) {
      return {
        data: response.data(),
      };
    } else {
      return {};
    }
  } catch (error) {
    console.log("Error in fetchUserById");
    console.log(error);
    return {};
  }
};

export default fetchUserById;
