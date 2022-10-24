import * as React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import useCustumerOrders from "../hooks/useCustumerOrders";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CustumerScreen";
import { Card, Icon } from "@rneui/themed";

type Props = {
  email: string;
  name: string;
  userId: string;
};

// {email, name, userId} -> destructuring
const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustumerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('MyModal', {userId: userId, name: name})}>
      <Card containerStyle={tw('p-5 rounded-lg')}>
        <View style={tw("flex-row justify-between")}>

          <View>
            <Text style={tw('text-2xl font-bold')}>{name}</Text>
            <Text style={[tw('text-sm'), {color: "#59c1cc"}]}>ID: {userId}</Text>
          </View>

          <View style={tw('flex-row items-center justify-end')}>
            <Text style={{color: '#59c1cc'}}>{loading ? "Loading..." : `${orders.length} x`}</Text>
            <Icon 
              style={tw("mb-5 ml-auto")}
              name="box"
              type="entypo"
              color="#59C1CC"
              size={50}
            />
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
