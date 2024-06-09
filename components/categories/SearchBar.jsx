import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View className='flex-none items-center'>
      <View className='flex-row items-center bg-[#F0F0F0] h-[32px] w-[86vw] rounded-xl'>
        <Image source={require('../../assets/images/home/search.png')} className='mx-2' />
        <TextInput className='w-full text-[14px]'/>
      </View>
    </View>
  )
}

export default SearchBar