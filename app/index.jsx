import { View, SafeAreaView, Text, Image, ImageBackground } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const App = () => {
  return (
    <ImageBackground 
      source={require('../assets/images/splash-screen/splash-bg.png')} 
      className="w-full h-full flex-1 items-center justify-center"
    >
      <View className="">
        <Image 
          source={require('../assets/images/splash-screen/logo.png')} 
          className='h-[150px] w-[150px]'
          resizeMode='contain'
        />
      </View>
      <Text className='color-white mt-[36px] text-lg'>Shop sustainably with EcoPick</Text>
      {/* <View className=""> */}
        <Link href="/(tabs)/home" className="text-center bg-[#49824E] w-[256px] h-[36px] mt-[36px] rounded-lg text-lg color-white">Start</Link>
      {/* </View> */}
    </ImageBackground>
  )
}

export default App