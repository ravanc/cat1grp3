import { View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { supabase } from '../../lib/supabase';

import HomeHeader  from '../../components/home/home-header';
import Carousel from '../../components/home/carousel';
import RankCard from '../../components/home/rank-card';
import ProductsList from '../../components/home/products';

const Home = () => {
  return (
    <SafeAreaView className='h-full'>
      <HomeHeader/>
      <RankCard/>
      <Carousel/>
      <View className='flex-row ml-7 mt-8'>
        <Text className='font-psemibold text-lg'>Popular</Text>
        <TouchableOpacity className='ml-auto mr-5 bg-primary rounded-full w-[60px] justify-center'>
          <Text 
            className='font-pregular text-xs text-center text-white'
            onPress={console.log("navigate to categories")} 
          >See All</Text>
        </TouchableOpacity>
      </View>
      <ProductsList/>
    </SafeAreaView>
    
  )
}

export default Home