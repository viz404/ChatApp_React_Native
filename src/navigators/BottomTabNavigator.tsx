import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import {Chats, Groups} from "../screens";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  let theme = "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme == "dark" ? "#60bf4b" : "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme == "dark" ? "#212121" : "white",
          borderTopWidth: 0,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="people" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
