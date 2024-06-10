import { View, Text, TouchableHighlight, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const HistoryItem = ({ value, history, setHistory }) => {
  return (
    <View className='justify-center items-center ml-2 mt-2'>
      <TouchableHighlight
      underlayColor={'#AAAAAA'}
      activeOpacity={0.8}
      onPress={() => router.push(`/results/${value}`)}
      className='bg-[#D9D9D9] px-2 py-2 rounded-xl'
      >
      <View className='flex-row items-center'>
        <TouchableOpacity 
          onPress={() => {
            let newHistory = history.filter((item) => item != value);
            setHistory(newHistory);
          }}
        >
          <Image source={require('../../assets/images/search/cross.png')} className='' />
        </TouchableOpacity>
        <Text className='ml-1'>{value}</Text>
      </View>
      </TouchableHighlight>
    </View>
  )
}

export default HistoryItem