import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'

const QuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <View className='flex-row items-center'>
      <Text className='text-lg font-plight'>Quantity</Text>
      <View className='flex-row items-center gap-2 ml-auto'>
        <TouchableHighlight 
          underlayColor={'#555555'}
          activeOpacity={0.8}
          onPress={() => ((quantity > 0) && setQuantity(quantity - 1))}
          className={'rounded-full h-[25px] w-[25px] bg-[#E8E8E8] items-center justify-center'}
        >
          <Image source={require('../../assets/images/product-description/minus.png')} tintColor={'#555555'}/>
        </TouchableHighlight>
        <Text className='text-lg font-plight w-10 text-center'>{quantity}</Text>
        <TouchableHighlight 
          underlayColor={'#555555'}
          activeOpacity={0.8}
          onPress={() => (setQuantity(quantity + 1))}
          className={'rounded-full h-[25px] w-[25px] bg-[#E8E8E8] items-center justify-center'}
        >
          <Image source={require('../../assets/images/product-description/plus.png')} tintColor={'#555555'}/>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default QuantitySelector