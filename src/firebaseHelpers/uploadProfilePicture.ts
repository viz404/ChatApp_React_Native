import storage from '@react-native-firebase/storage';
import {Alert} from 'react-native';

const uploadProfilePicture = async (uri: string, uid: string) => {
  try {
    let reference = storage().ref(
      `profile_pictures/${uid}.${uri.split('.').pop()}`,
    );
    let response = await fetch(uri);
    const blob = await response.blob();
    await reference.put(blob);
    let downloadUrl = await reference.getDownloadURL();
    return downloadUrl;
  } catch (error) {
    console.log('Error in uploadProfilePicture');
    console.log(error);
    Alert.alert('Error', "Couldn't upload image");
    return '';
  }
};

export default uploadProfilePicture;
