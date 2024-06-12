import { Text, View, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'

import Category from './Category'

const CategoryList = ({ categories, isSelected, setIsSelected, setSortBy }) => {
  return (
    <View className='flex-none'>
      <FlatList 
        data={categories}
        renderItem={({ item }) => 
          <Category categoryName={item.name} source={item.source} handlePress={() => {setIsSelected(item.id); setSortBy('ecoRating'); }} isSelected={(isSelected == item.id) ? true : false}/>
        }
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoryList