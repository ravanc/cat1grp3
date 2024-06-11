import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/discover/searchbar'
import ArticleCard from '../../components/discover/article-card'
import { Stack, router } from 'expo-router'

import ARTICLES from '../../constants/Articles'


const Discover = () => {
  
  return (
    <View className='flex items-center mt-14'>
      <View className='flex-row items-center mb-5'>
        <SearchBar/>
        <TouchableOpacity onPress={() => {console.log('go to bookmarks')}}>
          <Image source={require('../../assets/images/discover/bookmark-blank.png')} className='ml-3'/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ARTICLES}
        renderItem={({item, index}) => {
          const {id} = item
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push({
                  pathname: `/article-page/${id}`,
                  params: item
                })
              }}
            >
              <ArticleCard
                category={item.category}
                title={item.title}
                image={item.image}
                date={item.date}
                duration={item.duration}
              />
            </TouchableOpacity>  
          )        
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 10, paddingBottom: 70}}
      />
      
      <ArticleCard/>
    </View>
  )
}

export default Discover