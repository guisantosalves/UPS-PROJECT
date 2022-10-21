import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicatorBase,
  ActivityIndicatorComponent,
  ImageBackgroundComponent,
} from "react-native";
import * as React from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "../navigator/RootNavigator";
import { tabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Image } from "@rneui/themed/dist/Image";
import { Input } from "@rneui/base";

// getting the type of costumer -> nested navigation
export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<tabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const tw = useTailwind();

  // passing the type in usenavigation
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  const [input, setInput] = React.useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // container style is a property of component from "@rneui/base"
  return (
    <ScrollView style={{ backgroundColor: "#59c1cc" }}>
      <Image
        source={{ uri: "https://i.imgur.com/uU8GTZM.jpeg" }}
        containerStyle={tw("w-full h-64")}
      />

      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={(val) => setInput(val)}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
      />
    </ScrollView>
  );
};

export default CustomerScreen;
