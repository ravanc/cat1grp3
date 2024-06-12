import { View, Text, Image } from 'react-native'
import React from 'react'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'

const EcoRatingProgress = ({ecoRating}) => {
  return (
    <View className='flex justify-center items-center pt-4 my-3'>
          <CircularProgressBase 
            value={30} 
            radius={60} 
            activeStrokeWidth={10} 
            inActiveStrokeWidth={10} 
            activeStrokeColor={'#49824E'} 
            inActiveStrokeColor={'#DFE9E0'}
          >
            <View className='absolute flex-none items-center'>
              <Image source={require('../../assets/images/store-page/leaf-green.png')} className='w-[40px] h-[40px]' />
              <Text className='mt-2 text-[14px] font-pregular text-primary'>{ecoRating}/5.0</Text>
            </View>
          </CircularProgressBase>
          <Text className='mt-2 font-pregular text-primary'>Eco-rating: <Text className='font-psemibold'>Good</Text></Text>
        </View>
  )
}

export default EcoRatingProgress