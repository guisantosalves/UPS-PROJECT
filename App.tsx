import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { useTailwind } from "tailwind-rn";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// screens
import CustomerScreen from "./screens/CustumerScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // uri: 'http://192.168.88.15:5001/api/zeroed-dog',
  const client = new ApolloClient({
    uri: 'http://192.168.88.11:5001/api/zeroed-dog',
    cache: new InMemoryCache(),
  });

  return (
    // @ts-ignore - tailwind is missing type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

