import * as React from "react";
import { View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

const useOrders = () => {
    
    // using apollo to get the data from graphql
    const {loading, error, data} = useQuery(GET_ORDERS);
    const [orders, setOrders] = React.useState<Order[]>([]);

    React.useEffect(()=>{

        if(!data) return;

        // orders receive the array of Order, it's his type
        // value is declaring with his type 
        // data -> getOrders
        const orders: Order[] = data.getOrders.map(({ value }:OrderResponse)=>({
            carrier: value.carrier, 
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Lat: value.Lat,
            Lng: value.Lng,
            Address: value.Address,
            City: value.City,
        }))
        // returning object

        setOrders(orders)
        
    }, [data])

    return {loading, error, orders}
}

export default useOrders;