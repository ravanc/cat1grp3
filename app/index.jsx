import { View, SafeAreaView, Text, Image, ImageBackground } from 'react-native'
import { Redirect, router } from 'expo-router'
import React from 'react'

// Components
import CustomButton from '../components/generic/CustomButton'

const App = () => {
  return (
    <ImageBackground 
      source={require('../assets/images/splash-screen/splash-bg.png')} 
      className="w-full h-full flex-1 items-center justify-center"
    >
      <View className="flex-none justify-center items-center">
        <View className="w-[250px] h-[250px] rounded-full bg-white/60" />
        <Image 
          source={require('../assets/images/splash-screen/logo.png')} 
          className='h-[150px] w-[150px] absolute'
          resizeMode='contain'
        />
      </View>
      <Text className='color-white mt-[36px] text-lg'>Shop sustainably with EcoPick</Text>
      <CustomButton 
        text="Start"
        containerStyle="w-[256px] h-[42px] mt-[36px] rounded-lg"
        textStyle="text-lg"
        //// uncomment below to enable auth page
        // handlePress={() => router.push('/(auth)/sign-in')}
        // comment below to enable auth page
        handlePress={() => router.push('/home')}
      />
    </ImageBackground>
  )
}

export default App