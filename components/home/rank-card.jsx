import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'

const RankCard = () => {
  return (
    <View className='flex self-center justify-center bg-green-200 w-[90%] rounded-lg mt-5 mb-5 overflow-hidden '>
        <View className=' h-20'>
            <View className='flex-row'>
                <View className='flex-row '>
                    <View className='flex-column'>
                        <View className='flex-row ml-3 mb-[-15]'>
                            <Text className='font-pbold text-[35px] text-primary'>600</Text>
                            <Text className='font-psemibold mt-6 ml-1 text-primary'>TONNES</Text>
                        </View>
                        <View className='flex-row gap-2 items-center ml-2'>
                            <Text className='font-pregular text-[10px] text-primary'>That's how much CO2 emissions <Text className='font-psemibold text-white'>YOU</Text> prevented!</Text>
                            
                        </View>
                    </View>
                    
                </View>
                <View className='flex justify-center items-center ml-auto mr-3 mt-2'>
                    <View className='rounded-full bg-white w-[65px] h-[65px]'>
                        <Image source={require('../../assets/images/profile/seedling.png')} className='w-10 h-10 mt-3 ml-3' />
                    </View>
                </View>
            </View>
                
        </View>
        <View className='bg-white container h-[25px]'>
            <Text className='flex justify-center text-green-800 text-xs text-center pt-1 '>Level up when you shop sustainably!</Text>
        </View>
        
    </View>
  )
}

export default RankCard