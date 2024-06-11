import { View, Text, TouchableHighlight, Image } from 'react-native'
import { useState } from 'react'
import React from 'react'

const StoreItem = ({ item, total, setTotal, listSize, index }) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
    <>
      <View key={item.productId} className={`flex-row py-3 px-2 items-center ${index == (listSize - 1) && 'mb-2'}`} >
        <TouchableHighlight
            onPress={() => {
              (isChecked) ? setTotal(total - item.productPrice) : setTotal(total + item.productPrice)
              setIsChecked(!isChecked)
            }}
            underlayColor={'#E4FFE6'}
            activeOpacity={0.8}
            className='ml-1'
        >
            <Image source={isChecked ? require('../../assets/images/shopping-cart/checked.png') : require('../../assets/images/shopping-cart/unchecked.png')} />
        </TouchableHighlight>
        <Image source={item.imageSource} className='h-[70px] w-[70px] rounded-2xl border-[1px] border-[#999999] ml-4'/>
        <View className='flex-none justify-center ml-3'>
            <Text className='font-pregular text-[16px]'>{item.productName}</Text>
            <View className='flex-row items-center'>
            <Image source={require('../../assets/images/general/leaf-green.png')} className='ml-1'/>
            <Text className='ml-[2px] font-plight'>{item.ecoRating}</Text>
            </View>
            <Text className='font-plight'>Total: ${item.productPrice.toFixed(2)}</Text>
        </View>
        <Text className='absolute bottom-1 right-3 text-xs font-plight'>Quantity: 1</Text>
      </View>
      {index < listSize - 1 && <View className="self-center w-[90%] h-[1px] bg-[#777777] my-1" />}
    </>
  )
}

export default StoreItem