import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'

const ProfileHeader = ({ avatarSource, name }) => {
  return (
    <View className='flex-row items-center border-b-2 border-[#CCCCCC] py-3'>
      <Image source={require('../../assets/images/profile/demo-user.png')} className='ml-5' />
      <Text className='font-bold text-lg ml-3'>Jason Tan</Text>
      <View className='flex-row ml-auto mr-5'>
        <View className='flex-none justify-center items-center mr-2'>
          <View className='rounded-full bg-[#E4FFE6] w-[32px] h-[32px]' />
          <Image source={require('../../assets/images/profile/shopping-cart.png')} className='absolute' />
        </View>
        <View className='flex-none justify-center items-center'>
          <View className='rounded-full bg-[#E4FFE6] w-[32px] h-[32px]' />
          <Image source={require('../../assets/images/profile/heart.png')} className='absolute' />
        </View>
      </View>
    </View>
  )
}

export default ProfileHeader