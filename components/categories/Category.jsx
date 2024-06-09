import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({ source, categoryName, isSelected, handlePress }) => {
  return (
    <View className='flex-none justify-content w-[72px] h-[96px] ml-[16px]'>
        <TouchableOpacity
        onPress={handlePress}
        >
        <View className='flex-none justify-center items-center'>
            <View className={`flex-none justify-center items-center rounded-full w-[55px] h-[55px] ${isSelected ? 'bg-primary' : 'bg-grey'}`}>
            <Image source={source} resizeMode='contain'/>
            </View>
            <Text className='font-plight mt-1 text-center text-xs leading-4'>{categoryName}</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Category