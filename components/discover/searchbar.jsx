import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
      <View className='flex-row items-center bg-[#e7e8e8] h-[38px] w-[75vw] rounded-full'>
        <Image source={require('../../assets/images/home/search.png')} className='mx-3' />
        <TextInput 
            placeholder='Search Articles'
            className='w-full text-[14px]'
        />
      </View>
  )
}

export default SearchBar