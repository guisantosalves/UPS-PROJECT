import { View, Text, SafeAreaView } from "react-native";
import * as React from "react";
import {useTailwind} from 'tailwind-rn';

const CustomerScreen = () => {
    
    const tw = useTailwind();

    return(
        <SafeAreaView>
            <Text style={tw('text-red-500')}>Customer Screen bruh</Text>
        </SafeAreaView>
    )
}

export default CustomerScreen;