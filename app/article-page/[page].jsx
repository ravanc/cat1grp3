import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import Article from '../../components/discover/article';

const Page = () => {
  const {id, category, title, image, author, authorImg,  date, duration} = useLocalSearchParams();
  

  return (
    <SafeAreaView className='h-full w-full bg-white'>
      <View className='flex-row items-center pb-2'>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className='ml-2'
        >
          <Image source={require('../../assets/images/general/back.png')} className='w-[24px] h-[24px]' />
        </TouchableOpacity>
        <Text className='text-xl font-psemibold'>Read Article</Text>
      </View>
      <Article id={id} category={category} title={title} image={image} author={author} authorImg={authorImg} date={date} duration={duration}/>
    </SafeAreaView>
  )
}

export default Page