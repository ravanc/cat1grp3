import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useState } from 'react'

import SearchBar from '../../components/categories/SearchBar'
import HistoryItem from '../../components/search/HistoryItem'

const SearchPage = () => {
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView className='h-full w-full bg-white'>
      <View className='py-4'>
        <SearchBar history={history} setHistory={setHistory}/>
      </View>
        <Text className='font-plight text-lg ml-8'>Search History:</Text>
      <View className='flex-row flex-wrap mx-6'>
        { history.map((item) => <HistoryItem key={item} value={item} history={history} setHistory={setHistory}/>) }
      </View>
      <TouchableOpacity className='w-full h-full mt-3 border-t-[0.25px] border-[#AAAAAA]' onPress={() => router.back()}/>
    </SafeAreaView>
  )
}

export default SearchPage