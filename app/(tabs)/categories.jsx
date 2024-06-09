import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'

import Listing from '../../components/generic/Listing'
import CategoryList from '../../components/categories/CategoryList'
import SearchBar from '../../components/categories/SearchBar'

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
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='border-b-[1px] border-[#BBBBBB] py-2 mt-3'>
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