import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { usePathname, router } from 'expo-router'

const SearchBar = ({ history, setHistory, disabled }) => {
  const pathname = usePathname()
  const [query, setQuery] = useState('')

  return (
    <View className='flex-none items-center'>
      <View className='flex-row items-center bg-[#F0F0F0] h-[32px] w-[86vw] rounded-xl'>
        <TextInput 
          className='mx-2 text-[14px] w-[76vw]'
          placeholder='Search'
          value={query}
          onChangeText={(value) => setQuery(value)}
          autoCapitalize='none'
          autoCorrect={false}
          editable={disabled ? false : true}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            if (query.length == 0) {
                return Alert.alert('Error!', 'No input detected.')
            }
            if (!history.includes(query)) {
                setHistory([query, ...history]);
            }
            router.push(`/results/${query}`);
          }}
        >
          <Image source={require('../../assets/images/home/search.png')} className='ml-auto mr-2' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar