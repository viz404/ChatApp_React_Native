import {useEffect, useState} from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import {useDispatch, useSelector} from "react-redux";

import {Signin, UpdateInfo, Splash} from "../screens";
import {
  signinUserAction,
  signoutUserAction,
} from "../reduxStore/user/userActions";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const user = useSelector((store: any) => store.user);

  const dispatch = useDispatch();

  const onAuthStateChanged = (user: any) => {
    if (user) {
      dispatch(signinUserAction(user));
    } else {
      dispatch(signoutUserAction());
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  console.log(user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {initializing ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : !user.signedIn ? (
        <Stack.Screen name="Signin" component={Signin} />
      ) : !user.displayName ? (
        <Stack.Screen name="UpdateInfo" component={UpdateInfo} />
      ) : (
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
