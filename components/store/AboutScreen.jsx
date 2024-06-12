import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import EcoRatingProgress from './EcoRatingProgress'

const AboutScreen = ({ ecoRating }) => {
  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}
      className='bg-white px-8'
    >
      <EcoRatingProgress ecoRating={ecoRating}/>
      <View className='flex-row justify-start mt-1'>
        <Image source={require('../../assets/images/store-page/leaf-green.png')} className='w-5 h-5'/>
        <Text className='font-pregular text-[16px] ml-2'>Our Sustainability Strategy</Text>
      </View>
      <Text className='font-pregular text-[12px] text-justify leading-6 my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
      <Image source={require('../../assets/images/store-page/about-pic.png')} className='my-4 ml-1'/>
      <View className='flex-row justify-start mt-1'>
        <Image source={require('../../assets/images/store-page/leaf-green.png')} className='w-5 h-5'/>
        <Text className='font-pregular text-[16px] ml-2'>Green Product Innovation</Text>
      </View>
      <Text className='font-pregular text-[12px] text-justify leading-6 my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
      <View className='flex-row justify-start mt-3'>
        <Image source={require('../../assets/images/store-page/leaf-green.png')} className='w-5 h-5'/>
        <Text className='font-pregular text-[16px] ml-2'>Responsible Sourcing</Text>
      </View>
      <Text className='font-pregular text-[12px] text-justify leading-6 my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>

    </ScrollView>
  )
}

export default AboutScreen