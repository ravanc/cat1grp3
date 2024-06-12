import { View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import SearchBar from '../../components/discover/searchbar'
import ArticleCard from '../../components/discover/article-card'
import { Stack, router } from 'expo-router'

import ARTICLES from '../../constants/articles'


const Discover = () => {
  
  return (
    
    <SafeAreaView className='flex items-center h-full bg-white'>
      <View className='flex-row items-center mb-2'>
        <SearchBar/>
        <TouchableOpacity onPress={() => {console.log('go to bookmarks')}} activeOpacity={0.9}>
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
              className='rounded-xl overflow-hidden border-[1px] border-[#BBBBBB] w-[95%] self-center mb-4'
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
    </SafeAreaView>
  )
}

export default Discover