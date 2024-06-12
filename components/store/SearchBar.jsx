import { View, TextInput, Image } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
      <View className='flex-row items-center bg-[#e7e8e8] h-[32px] w-[75vw] rounded-xl'>
        <Image source={require('../../assets/images/home/search.png')} className='mx-3' />
        <TextInput 
            placeholder='Search in Store'
            className='w-full text-[14px]'
            autoCapitalize='none'
            autoCorrect={false}
        />
      </View>
  )
}

export default SearchBar