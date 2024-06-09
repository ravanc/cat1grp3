import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

import HomeHeader  from '../../components/home/home-header';
import Carousel from '../../components/home/carousel';
import RankCard from '../../components/home/rank-card';
import ProductsList from '../../components/home/products';

const Home = () => {
  return (
    <SafeAreaView className='h-full bg-white'>
      <HomeHeader/>
      <TouchableOpacity
        className='mt-4 self-center rounded-xl'
        activeOpacity={0.9}
        onPress={() => {router.push('/profile')}}
      >
        <RankCard/>
      </TouchableOpacity>
      <View className='mt-6'>
        <Carousel/>
      </View>
      <View className='flex-row ml-7 mt-8'>
        <Text className='font-psemibold text-lg'>Popular</Text>
        <TouchableOpacity className='ml-auto mr-5 bg-primary rounded-full w-[60px] justify-center'>
          <Text 
            className='font-pregular text-xs text-center text-white'
            onPress={() => { router.push('/categories') }} 
          >See All</Text>
        </TouchableOpacity>
      </View>
      <ProductsList/>
    </SafeAreaView>
    
  )
}

export default Home