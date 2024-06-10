import { SafeAreaView, TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Cart = () => {
  return (
    <SafeAreaView className='h-full w-full bg-white'>
    <View className='flex-row items-center'>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.back()}
        className='ml-2'
      >
        <Image source={require('../../assets/images/general/back.png')} className='w-[24px] h-[24px]' />
      </TouchableOpacity>
      <Text className='text-xl font-psemibold ml-2'>My Cart</Text>
    </View>
    </SafeAreaView>
  )
}

export default Cart