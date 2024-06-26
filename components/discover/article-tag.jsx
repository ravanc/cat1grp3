import { View, Text } from 'react-native'
import React from 'react'

const ArticleTag = ({ category }) => {
  return (
    <View className='w-auto border-2 rounded-2xl border-primary'>
      <Text className='font-pregular text-[10px] mx-2 text-primary'>{category}</Text>
    </View>
  )
}

export default ArticleTag