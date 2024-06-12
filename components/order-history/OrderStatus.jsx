import { View, Text } from 'react-native'
import React from 'react'

const OrderStatus = ({ status }) => {
  let text = ''
  let bg = ''
  if (status == 'toShip') {
    text = 'To Ship'
    bg = 'bg-[#FCA5A5]'
  } else if (status == 'toReceive') {
    text = 'To Receive'
    bg = 'bg-[#FCD34D]'
  } else if (status == 'completed') {
    text = 'Completed'
    bg = 'bg-[#D9F99D]'
  }
  
  return (
    <View className={`w-min py-1 px-3 rounded-full ${bg}`}>
      <Text className='text-xs font-plight'>{text}</Text>
    </View>
  )
}

export default OrderStatus