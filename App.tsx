import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { useTailwind } from "tailwind-rn";
import RootNavigator from "./navigator/RootNavigator";

// screens
import CustomerScreen from "./screens/CustumerScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // @ts-ignore - tailwind is missing type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}

