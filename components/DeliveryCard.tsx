import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Card, Icon } from '@rneui/base'

type Props = {
    order: Order
}

const DeliveryCard = ({order}: Props) => {

  const tw = useTailwind();

  return (
    <Card containerStyle={[tw("rounded-lg my-2"), {
        backgroundColor: '#59c1cc',
        padding: 0,
        paddingTop: 16,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 10,
    }]}>
        <View>
            <Icon name='box' type='entypo' size={50} color="white"/>
        </View>
    </Card>
  )
}

export default DeliveryCard