import { View, Text, SafeAreaView, ScrollView, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { router } from 'expo-router'

import Listing from '../../components/generic/Listing'
import CategoryList from '../../components/categories/CategoryList'

const CATEGORIES = [
  {
      id: 'food',
      source: require('../../assets/images/categories/food.png'),
      name: 'Food',
  },
  {
      id: 'mensFashion',
      source: require('../../assets/images/categories/men-fashion.png'),
      name: 'Men\'s Fashion',
  },
  {
      id: 'womensFashion',
      source: require('../../assets/images/categories/women-fashion.png'),
      name: 'Women\'s Fashion',
  },
  {
      id: 'kids',
      source: require('../../assets/images/categories/kids.png'),
      name: 'Kids',
  },
  {
      id: 'homeAppliances',
      source: require('../../assets/images/categories/home-appliances.png'),
      name: 'Home Appliances',
  },
]

const Categories = () => {

  const [isSelected, setIsSelected] = useState('food');

  return (
    <SafeAreaView className='bg-white h-full w-full'>
      <View className='flex-row items-center py-4 border-b-[1px] border-[#BBBBBB]'>
        <Text className='font-psemibold text-xl ml-5'>Categories</Text>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor={'#BBBBBB'}
          onPress={() => { router.push('./../search-page/page') }}
          className='rounded-full w-[16px] ml-auto mr-6'
        >
          <View className='flex-none justify-center items-center'>
              <View className='rounded-full bg-[#E4FFE6] w-[32px] h-[32px]' />
              <Image source={require('../../assets/images/home/search.png')} className='absolute' />
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='border-b-[1px] border-[#BBBBBB] py-2'>
          <CategoryList categories={CATEGORIES} isSelected={isSelected} setIsSelected={setIsSelected}/>
        </View>
        <View className='flex-none items-center'>
          <View className='flex-row flex-wrap justify-start w-[85vw]'>
            <Text className='font-psemibold w-full text-center text-xl mt-2'>{(CATEGORIES.find((category) => category.id == isSelected)).name}</Text>
            <View className='flex-none items-center w-[50%]'>
              <Listing 
                source={require('../../assets/images/home/product.png')} 
                productName={'Blouse'} 
                merchantName={'Not SHEIN'} 
                ecoRating={'5.0'} 
                userRating={'5.0'}
                styles={'mt-3'}
              />
            </View>
            <View className='flex-none items-center w-[50%]'>
              <Listing 
                source={require('../../assets/images/home/product.png')} 
                productName={'Blouse'} 
                merchantName={'Not SHEIN'} 
                ecoRating={'5.0'} 
                userRating={'5.0'}
                styles={'mt-3'}
              />
            </View>
            <View className='flex-none items-center w-[50%]'>
              <Listing 
                source={require('../../assets/images/home/product.png')} 
                productName={'Blouse'} 
                merchantName={'Not SHEIN'} 
                ecoRating={'5.0'} 
                userRating={'5.0'}
                styles={'mt-3'}
              />
            </View>
            <View className='flex-none items-center w-[50%]'>
              <Listing 
                source={require('../../assets/images/home/product.png')} 
                productName={'Blouse'} 
                merchantName={'Not SHEIN'} 
                ecoRating={'5.0'} 
                userRating={'5.0'}
                styles={'mt-3'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories