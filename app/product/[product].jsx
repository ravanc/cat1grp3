import { View, Text, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import React from 'react'

const ProductDescription = () => {
  const { product } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text className='text-2xl'>{product}</Text>
    </SafeAreaView>
  )
}

export default ProductDescription