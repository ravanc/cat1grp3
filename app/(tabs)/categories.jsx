import { View, Text, SafeAreaView, ScrollView, TouchableHighlight, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { router } from 'expo-router'

import Listing from '../../components/generic/Listing'
import CategoryList from '../../components/categories/CategoryList'
import CustomButton from '../../components/generic/CustomButton'
import CATEGORIES from '../../constants/categories'
import { searchByCategory } from '../../lib/services'
import { useState, useEffect } from 'react'
import { router } from 'expo-router'

import Listing from '../../components/generic/Listing'
import CategoryList from '../../components/categories/CategoryList'
import CustomButton from '../../components/generic/CustomButton'
import CATEGORIES from '../../constants/categories'
import { searchByCategory } from '../../lib/services'

const Categories = () => {
  const [categorySelected, setCategorySelected] = useState('food');
  const [sortBy, setSortBy] = useState('ecoRating');
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(searchByCategory(categorySelected));
  }, [categorySelected])


  const [categorySelected, setCategorySelected] = useState('food');
  const [sortBy, setSortBy] = useState('ecoRating');
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(searchByCategory(categorySelected));
  }, [categorySelected])


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
          <CategoryList categories={CATEGORIES} isSelected={categorySelected} setIsSelected={setCategorySelected} setSortBy={setSortBy}/>
        </View>


        <View>
          <Text className='font-psemibold text-2xl mt-3 ml-4'>{(CATEGORIES.find((category) => category.id == categorySelected)).name}</Text>
          <View className='flex-row w-full items-center mt-1'>
            <Text className='text-[16px] font-pregular ml-4'>Sort by:</Text>
            <CustomButton 
              text={'Eco-Rating'} 
              containerStyle={`h-8 w-24 rounded-lg ml-2 ${(sortBy == 'ecoRating') ? 'bg-primary' : 'bg-secondary border-[1px] border-[#999999]'}`} 
              textStyle={`font-pregular ${(sortBy == 'ecoRating') ? 'text-white' : 'text-black'}`} 
              handlePress={() => {
                setSortBy('ecoRating')
                setListings(listings.sort((itemA, itemB) => (itemB.ecoRating - itemA.ecoRating)))
                }}
                />
            <CustomButton 
              text={'User Rating'} 
              containerStyle={`h-8 w-24 rounded-lg ml-2 ${(sortBy == 'userRating') ? 'bg-primary' : 'bg-secondary border-[1px] border-[#999999]'}`} 
              textStyle={`font-pregular ${(sortBy == 'userRating') ? 'text-white' : 'text-black'}`} 
              handlePress={() => {
                setSortBy('userRating')
                setListings(listings.sort((itemA, itemB) => (itemB.userRating - itemA.userRating)))
              }}
            />
          </View>


          <SafeAreaView className='flex-row flex-wrap justify-start mt-4 self-center'>
            {listings.map((item) => 
              <Listing 
                source={item.imageSource}
                productName={item.productName}
                merchantName={item.merchantName}
                ecoRating={item.ecoRating}
                userRating={item.userRating}
                key={item.productId}
                styles={'ml-12 mb-4'}
              />
            )}
          </SafeAreaView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories