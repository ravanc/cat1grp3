import { View, Text, Image, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

const RankCard = () => {
  return (
    // <View className='flex self-center justify-center bg-green-200 w-[90%] rounded-lg mt-5 mb-5 overflow-hidden border-[1px]'>
    //     <View className='h-20 border-2'>
    //         <View className='flex-row border-2 border-red-200'>
    //             <View className='flex-row border-2 border-dashed'>
    //                 <View className='flex-column'>
    //                     <View className='flex-row ml-3 mb-[-15]'>
    //                         <Text className='font-pbold text-[35px] text-primary'>600</Text>
    //                         <Text className='font-psemibold mt-6 ml-1 text-primary'>TONNES</Text>
    //                     </View>
    //                     <View className='flex-row gap-2 items-center ml-2'>
    //                         <Text className='font-pregular text-[10px] text-primary'>That's how much CO2 emissions <Text className='font-psemibold text-white'>YOU</Text> prevented!</Text>
                            
    //                     </View>
    //                 </View>
                    
    //             </View>
    //             <View className='flex justify-center items-center ml-auto mr-3 mt-2'>
    //                 <View className='rounded-full bg-white w-[65px] h-[65px]'>
    //                     <Image source={require('../../assets/images/profile/seedling.png')} className='w-10 h-10 mt-3 ml-3' />
    //                 </View>
    //             </View>
    //         </View>
                
    //     </View>
    //     <View className='bg-white container h-[25px]'>
    //         <Text className='flex justify-center text-green-800 text-xs text-center pt-1 '>Level up when you shop sustainably!</Text>
    //     </View>
    // </View>

    <LinearGradient className='flex-none self-center h-[100px] w-[350px] rounded-lg overflow-hidden border-[1px] border-[#DDDDDD]' colors={['#E4FFE6', '#5BAA63']} start={{x: 0, y: 0}} end={{x: 1, y: 0.5}}>
        <View className='flex-row items-center h-[80px]'>
        <View className='ml-2'> 
            <View className='h-[32px]'>
            <Text className='text-[30px] text-primary font-psemibold'>600<Text className='text-[16px]'> TONNES</Text></Text>
            </View>
            <Text className='text-[10px] text-primary font-pregular'>The amount of carbon emissions <Text className='text-white text-[14px] font-psemibold'>YOU</Text> prevented!</Text>
        </View>
        <View className='rounded-full bg-white h-[50px] w-[50px] border-[0.25px] flex-none justify-center items-center ml-auto mr-3'>
            <Image source={require('../../assets/images/profile/seedling.png')} className='w-[30px] h-[30px]'/>
        </View>
        </View>
        <View className='bg-white w-[350px] h-[20px] mt-auto'>
        <Text className='text-center text-xs text-primary font-pregular'>Level up when you shop sustainably!</Text>
        </View>
    </LinearGradient>
  )
}

export default RankCard