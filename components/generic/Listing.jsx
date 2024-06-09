import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Listing = ({source, productName, merchantName, ecoRating, userRating, styles}) => {

  const [isLiked, setIsLiked] = useState(false);

  return (
    <View className={`w-[145px] h-[175px] ${styles}`}>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.9}
        >
          <View>
            <Image source={source} className='rounded-2xl'/>
            <View className='w-[16px] h-[16px] absolute right-4 bottom-3'>
              <TouchableOpacity 
              onPress={() => { setIsLiked(!isLiked)}}
              activeOpacity={0.9}
              >
              <Image source={isLiked ? require('../../assets/images/general/heart.png') : require('../../assets/images/general/heart-blank.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Text className='mt-[2px] font-pregular'>{productName}</Text>
          <View className='flex-row items-center'>
          <Text className='font-plight'>{merchantName}</Text>
          <View className='ml-auto flex-row items-center'>
            <Image source={require('../../assets/images/general/leaf-green.png')} className='h-[10px] w-[10px] mr-[2px]' />
            <Text className='font-plight mr-[2px]'>{ecoRating}</Text>
            <Image source={require('../../assets/images/general/star-yellow.png')} className='h-[12px] w-[12px] mr-[2px]'/>
            <Text className='font-plight'>{userRating}</Text>
          </View>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default Listing