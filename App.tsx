import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import {useTailwind} from 'tailwind-rn';

// screens
import CustomerScreen from "./screens/CustumerScreen";

export default function App() {
  return (
    // @ts-ignore - tailwind is missing type definition
    <TailwindProvider utilities={utilities}>
      <CustomerScreen />
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
