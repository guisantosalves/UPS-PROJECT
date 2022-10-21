import * as React from "react";
import { View } from "react-native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import CustomerScreen from "../screens/CustumerScreen";
import OrdersScreen from "../screens/OrdersScreen";

export type tabStackParamList = {
    Customers: undefined;
    Orders: undefined;
}

const Tab = createBottomTabNavigator<tabStackParamList>();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Customers" component={CustomerScreen}/>
            <Tab.Screen name="Orders" component={OrdersScreen}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;