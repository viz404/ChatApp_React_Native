import {Alert, StatusBar, StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {useDispatch, useSelector} from "react-redux";

import {Signin, UpdateInfo, Splash, NewChat, Chats} from "../screens";
import {
  signinUserAction,
  signoutUserAction,
} from "../reduxStore/user/userActions";
import BottomTabNavigator from "./BottomTabNavigator";
import fetchUserById from "../firebaseHelpers/fetchUserById";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const store = useSelector((store: any) => store);
  const storeUser = store.user;
  const {theme} = store.theme;

  console.log("storeUser");
  console.log(storeUser);

  const dispatch = useDispatch();

  const onAuthStateChanged = async (user: any) => {
    try {
      if (user) {
        let {data}: any = await fetchUserById(user.uid);

        dispatch(signinUserAction(data || user));
      } else {
        if (storeUser.phoneNumber != "") {
          dispatch(signoutUserAction());
        }
      }
    } catch (error) {
      console.log("Error in StackNavigator");
      console.log(error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      if (initializing) setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={theme == "dark" ? "#212121" : "white"}
        barStyle={theme == "dark" ? "light-content" : "dark-content"}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {initializing ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : !storeUser.signedIn ? (
          <Stack.Screen name="Signin" component={Signin} />
        ) : !storeUser.displayName ? (
          <Stack.Screen name="UpdateInfo" component={UpdateInfo} />
        ) : (
          <>
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="NewChat" component={NewChat} />
          </>
        )}
      </Stack.Navigator>
    </View>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
