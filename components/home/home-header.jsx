import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import ProgressBar from './progress-bar'
import { router } from 'expo-router'

const HomeHeader = () => {
  return (
    <View className='flex-row items-center py-3 ml-5'>
      <Image source={require('../../assets/images/home/demo-user.png')}/>
      <View className='flex-col pl-3'>
        <Text className='font-psemibold text-lg'>Welcome, Jason!</Text>
        <Text className='font-pregular font-xs mb-1'>Level: <Text className='font-psemibold font-xs text-primary'>Seedling</Text></Text>
        <ProgressBar/>
      </View>
      <View className='flex-row gap-2 ml-auto mr-5'>
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={'#BBBBBB'}
            onPress={() => { router.push('./../search-page/page') }}
            style={{borderRadius: 50, width: '16px'}}
            >
            <View className='flex-none justify-center items-center'>
                <View className='rounded-full bg-[#E4FFE6] w-[32px] h-[32px]' />
                <Image source={require('../../assets/images/home/search.png')} className='absolute' />
            </View>
        </TouchableHighlight>
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={'#BBBBBB'}
            onPress={() => { router.push('./../cart/cart') }}
            style={{borderRadius: 50, width: '16px'}}
            >
            <View className='flex-none justify-center items-center'>
                <View className='rounded-full bg-[#E4FFE6] w-[32px] h-[32px]' />
                <Image source={require('../../assets/images/profile/shopping-cart.png')} className='absolute' />
            </View>
            
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default HomeHeader