import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { Image } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'

import ARTICLES from '../../constants/articles'
import ArticleCard from '../../components/discover/article-card'

const Bookmarks = () => {
  const { bookmarked, setBookmarked } = useLocalSearchParams();
  const [newBookmarked, setNewBookmarked] = useState([]);

  const bookmarkedArray = bookmarked.split(',');
  
  const bookmarkedFinal = ARTICLES.filter((article) => {
      if (bookmarkedArray.includes(article.id.toString())) {
        return true
      } else {
        return false
      }    
  });
  
  
  return (
    <SafeAreaView className='mt-14 items-center'>
      <View className='flex-row mr-auto ml-5'>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className='ml-2'
        >
          <Image source={require('../../assets/images/general/back.png')} className='w-[24px] h-[24px]' />
        </TouchableOpacity>
        <Text className='font-psemibold'>Bookmarks</Text>
      </View>
      <FlatList
        data={bookmarkedFinal}
        showsVerticalScrollIndicator = {false}
        renderItem={
          ({item, index}) => {
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
                  bookmarked={newBookmarked}
                  setBookmarked={setNewBookmarked}
                />
              </TouchableOpacity>  
            )
        }}
        contentContainerStyle={{paddingTop: 20, paddingBottom: 40}}
      />

    </SafeAreaView>
  )
}

export default Bookmarks