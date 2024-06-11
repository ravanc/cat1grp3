import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ArticleTag from './article-tag'

const Article = ({ id, category, title, image, author, authorImg, date, duration }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      className='flex-column w-5/6 mt-5 mx-auto'
      contentContainerStyle={{paddingBottom: 30}}>
        <View className='mr-auto ml-1'>
          <ArticleTag category={category}/>
        </View>
        <Text className='font-psemibold text-[16px] my-3 mx-1'>{title}</Text>
        <Image source={image} className='w-full'/>
        <View className='flex-row items-center my-5'>
          <Image source={authorImg} />
          <View className='ml-3'>
            <Text className='font-psemibold text-[14px]'>by {author}</Text>
            
            <Text className='text-[12px] text-[#979797]'>
              {date}   <View className='w-1.5 h-1.5 rounded-full bg-[#D9D9D9]'/> <Text className='font-pitalic'>  {duration}</Text>
            </Text>
          
          </View>
          <View className='ml-auto mr-2'>
              <TouchableOpacity onPress={() => {setIsBookmarked(!isBookmarked)}}>
                  <Image source={!isBookmarked ? require('../../assets/images/discover/bookmark-blank.png') : require('../../assets/images/discover/bookmark2.png')}/>
              </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text className='font-pregular text-[12px] text-justify leading-6 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
          <Text className='font-pregular text-[12px] text-justify leading-6 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas. Amet risus nullam eget felis eget nunc lobortis mattis. Vitae justo eget magna fermentum iaculis eu non diam. Donec enim diam vulputate ut pharetra sit amet. Mollis aliquam ut porttitor leo a. Risus at ultrices mi tempus. Et sollicitudin ac orci phasellus egestas. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Amet tellus cras adipiscing enim. Sem et tortor consequat id. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. </Text>
          <Text className='font-pregular text-[12px] text-justify leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque egestas. Amet risus nullam eget felis eget nunc lobortis mattis. Vitae justo eget magna fermentum iaculis eu non diam. Donec enim diam vulputate ut pharetra sit amet. Mollis aliquam ut porttitor leo a. Risus at ultrices mi tempus. Et sollicitudin ac orci phasellus egestas. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Amet tellus cras adipiscing enim. Sem et tortor consequat id. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet. </Text>
        </View>
    </ScrollView>
  )
}

export default Article