import { View, Text, Image } from 'react-native'
import React from 'react'

const ProgressItem = ({ item, listSize, index }) => {

    return (
    <>
      <View key={item.productId} className={`flex-row py-3 px-2 items-center ${index == (listSize - 1) && 'mb-2'}`} >
        <Image source={item.imageSource} className='h-[70px] w-[70px] rounded-2xl border-[1px] border-[#999999] ml-4'/>
        <View className='flex-none justify-center ml-3'>
            <Text className='font-pregular text-[16px]'>{item.productName}</Text>
            <Text className='font-plight'>Total: ${item.productPrice.toFixed(2)}</Text>
        </View>
        <Text className='absolute bottom-1 right-3 text-xs font-plight'>Quantity: 1</Text>
      </View>
      {index < listSize - 1 && <View className="self-center w-[90%] h-[1px] bg-[#777777] my-1" />}
    </>
  )
}

export default ProgressItem