import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'

import Listing from '../../components/generic/Listing'
import CustomButton from '../../components/generic/CustomButton'
import { searchByMerchant } from '../../lib/services'

const ProductsScreen = ({ merchantName }) => {
  const [sortBy, setSortBy] = useState('ecoRating');
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    setResults(searchByMerchant(merchantName));
  }, [])
  
  return (
    <SafeAreaView className='h-full w-full bg-white'>
      <ScrollView className='pt-3'>
      <View className='flex-row items-center pb-3'>
        <Text className='text-[16px] font-pregular ml-4'>Sort by:</Text>
        <CustomButton 
          text={'Eco-Rating'} 
          containerStyle={`h-8 w-24 rounded-lg ml-2 ${(sortBy == 'ecoRating') ? 'bg-primary' : 'bg-secondary border-[1px] border-[#999999]'}`} 
          textStyle={`font-pregular ${(sortBy == 'ecoRating') ? 'text-white' : 'text-black'}`} 
          handlePress={() => {
            setSortBy('ecoRating')
            setResults(results.sort((itemA, itemB) => (itemB.ecoRating - itemA.ecoRating)))
            }}
            />
        <CustomButton 
          text={'User Rating'} 
          containerStyle={`h-8 w-24 rounded-lg ml-2 ${(sortBy == 'userRating') ? 'bg-primary' : 'bg-secondary border-[1px] border-[#999999]'}`} 
          textStyle={`font-pregular ${(sortBy == 'userRating') ? 'text-white' : 'text-black'}`} 
          handlePress={() => {
            setSortBy('userRating')
            setResults(results.sort((itemA, itemB) => (itemB.userRating - itemA.userRating)))
          }}
        />
      </View>
        <View className='flex-row flex-wrap'>
          { results.map((item, index) => 
            <Listing 
              productName={item.productName}
              merchantName={item.merchantName}
              source={item.imageSource}
              ecoRating={item.ecoRating}
              userRating={item.userRating}
              price={item.productPrice}
              styles={'w-[50%] mb-4 items-center'}
              key={index}
            />
          ) }
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default ProductsScreen