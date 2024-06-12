import { View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/discover/searchbar'
import ArticleCard from '../../components/discover/article-card'
import { Stack, router } from 'expo-router'

import ARTICLES from '../../constants/articles'


const Discover = () => {
  const [bookmarked, setBookmarked] = useState([]);
  
  return (
    
    <SafeAreaView className='flex items-center h-full bg-white mt-5'>
      <View className='flex-row items-center mb-2'>
        <SearchBar/>
        <TouchableOpacity 
          onPress={() => {
            router.push({
              pathname: '/bookmarks/bookmarks',
              params: {bookmarked: `${bookmarked}`, setBookmarked: `${setBookmarked}`}
            })}} 
          activeOpacity={0.9}>
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
                id={item.id}
                category={item.category}
                title={item.title}
                image={item.image}
                date={item.date}
                duration={item.duration}
                bookmarked={bookmarked}
                setBookmarked={setBookmarked}
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