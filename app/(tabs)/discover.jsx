import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/discover/searchbar'
import ArticleCard from '../../components/discover/article-card'

const Discover = () => {
  const articles = [
    {
      category: 'Fashion',
      title: '10 Latest Sustainability Efforts By Fashion Brands In Asia',
      image: require('../../assets/images/discover/article-1.png'),
      date: '4 March 2024',
      duration: '15 min read'
    },
    {
      category: 'Shopping',
      title: '5 Tips On How To Save While Shopping Sustainably',
      image: require('../../assets/images/discover/article-2.png'),
      date: '4 March 2024',
      duration: '10 min read'
    },
    {
      category: 'Fashion',
      title: '10 Latest Sustainability Efforts By Fashion Brands In Asia',
      image: require('../../assets/images/discover/article-1.png'),
      date: '4 March 2024',
      duration: '15 min read'
    },
    {
      category: 'Fashion',
      title: '10 Latest Sustainability Efforts By Fashion Brands In Asia',
      image: require('../../assets/images/discover/article-1.png'),
      date: '4 March 2024',
      duration: '15 min read'
    }
  ]
  return (
    <View className='flex items-center mt-14'>
      <View className='flex-row items-center mb-5'>
        <SearchBar/>
        <TouchableOpacity onPress={() => {console.log('go to bookmarks')}}>
          <Image source={require('../../assets/images/discover/bookmark-blank.png')} className='ml-3'/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={articles}
        renderItem={({item, index}) =>
          <ArticleCard
            category={item.category}
            title={item.title}
            image={item.image}
            date={item.date}
            duration={item.duration}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 10, paddingBottom: 70}}
      />
      
      <ArticleCard/>
    </View>
  )
}

export default Discover