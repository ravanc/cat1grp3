import { View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import SearchBar from '../../components/discover/searchbar'
import ArticleCard from '../../components/discover/article-card'

const Discover = () => {
  const articles = [
    {
      category: 'Fashion',
      title: '10 Latest Sustainability Efforts By Fashion Brands In Asia',
      image: require('../../assets/images/discover/article-1.png'),
      date: '4 March 2024',
      duration: '15 min read',
      route: '/article1',
      id: 1,
    },
    {
      category: 'Shopping',
      title: '5 Tips On How To Save While Shopping Sustainably',
      image: require('../../assets/images/discover/article-2.png'),
      date: '4 March 2024',
      duration: '10 min read',
      route: '/article2',
      id: 2,
    },
    {
      category: 'Fashion',
      title: '10 Latest Sustainability Efforts By Fashion Brands In Asia',
      image: require('../../assets/images/discover/article-1.png'),
      date: '4 March 2024',
      duration: '15 min read',
      route: '/article3',
      id: 3,
    },
    {
      category: 'Fashion',
      title: '10 Latest Sustainability Efforts By Fashion Brands In Asia',
      image: require('../../assets/images/discover/article-1.png'),
      date: '4 March 2024',
      duration: '15 min read',
      route: '/article4',
      id: 4,
    }
  ]
  return (
    <SafeAreaView className='flex items-center h-full bg-white'>
      <View className='flex-row items-center mb-2'>
        <SearchBar/>
        <TouchableOpacity onPress={() => {console.log('go to bookmarks')}} activeOpacity={0.9}>
          <Image source={require('../../assets/images/discover/bookmark-blank.png')} className='ml-3'/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={articles}
        renderItem={({item}) =>
          <ArticleCard
            category={item.category}
            title={item.title}
            image={item.image}
            date={item.date}
            duration={item.duration}
            route={item.route}
            key={item.id}
          />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 10, paddingBottom: 70}}
      />
    </SafeAreaView>
  )
}

export default Discover