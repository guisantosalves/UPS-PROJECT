import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

// screens
import CustomerScreen from "../screens/CustumerScreen";
import OrdersScreen from "../screens/OrdersScreen";
import { useNavigation } from "@react-navigation/native";

export type tabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<tabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  // before render the screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59c1cc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color }) => {
          if (route.name == "Customers") {
            return (
              <Icon
                name="users"
                type="entypo"
                color={focused ? "##59c1cc" : "gray"}
              />
            );
          } else if (route.name == "Orders") {
            return (
              <Icon
                name="box"
                type="entypo"
                color={focused ? "##59c1cc" : "gray"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
