import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'
import ArticleTag from './article-tag'
import { useState } from 'react';

const ArticleCard = ({ id, category, title, image, date, duration, bookmarked, setBookmarked }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const addArticle = () => {
    setBookmarked([...bookmarked, id]);
  };

  const deleteArticle = () => {
    const newBookmarkList = bookmarked.filter((itemId) => 
        itemId != id
    );
    setBookmarked(newBookmarkList);
  };  

  useEffect(() => {

      if (isBookmarked) {
        addArticle()
      } else if (!isBookmarked) {
        deleteArticle()
      }
    }, [isBookmarked]);
  
  
    
  return (

    <View className='h-auto w-[85vw] rounded-3xl overflow-hidden mb-5 border-[#dedddd] border-2'>
      <Image source={image} className='h-40 w-full '/>
      <View className='flex-column h-auto px-3 py-2'>
        <View className='flex-row items-center'>
        <ArticleTag category={category}/>
        <View className='ml-auto'>
          <TouchableOpacity 
            onPress={() => 
              setIsBookmarked(!isBookmarked)
            } 
            activeOpacity={0.9}
          >
            <Image source={!isBookmarked ? require('../../assets/images/discover/bookmark-blank.png') : require('../../assets/images/discover/bookmark2.png')}/>
          </TouchableOpacity>
        </View>
        </View>
        <Text className='font-psemibold text-[14px] text-wrap mt-1'>{title}</Text>
        <View className='flex-row my-1'>
          <Text className='font-pitalic text-[12px] text-[#979797]'>{duration}</Text>
          <Text className='font-pitalic text-[12px] text-[#979797] ml-auto'>{date}</Text>
        </View>
      </View>
    </View> 
  )
}

export default ArticleCard