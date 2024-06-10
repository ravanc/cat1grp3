import { View, Text, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import CustomButton from '../../components/generic/CustomButton'

const Search = () => {
  const { query } = useLocalSearchParams();
  const [sortBy, setSortBy] = useState('ecoRating')
  
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
        <Text className='text-xl font-psemibold'> Search results for '{query}'</Text>
      </View>

      <View className='flex-row items-center mt-3 pb-3 border-b-[1px] border-[#DDDDDD]'>
        <Text className='text-[16px] font-pregular ml-4'>Sort by:</Text>
        <CustomButton 
          text={'Eco-Rating'} 
          containerStyle={`h-8 w-24 rounded-lg ml-2 ${(sortBy == 'ecoRating') ? 'bg-primary' : 'bg-secondary border-[1px] border-[#999999]'}`} 
          textStyle={`font-pregular ${(sortBy == 'ecoRating') ? 'text-white' : 'text-black'}`} 
          handlePress={() => setSortBy('ecoRating')}
          />
        <CustomButton 
          text={'User Rating'} 
          containerStyle={`h-8 w-24 rounded-lg ml-2 ${(sortBy == 'userRating') ? 'bg-primary' : 'bg-secondary border-[1px] border-[#999999]'}`} 
          textStyle={`font-pregular ${(sortBy == 'userRating') ? 'text-white' : 'text-black'}`} 
          handlePress={() => setSortBy('userRating')}
        />
      </View>
    </SafeAreaView>
  )
}

export default Search