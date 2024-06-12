import { View, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

import Listing from '../generic/Listing'
import Products from '../../constants/products'
import { shuffle } from '../../lib/services'

const ProductsList = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    shuffle(Products)
    setProductList(Products.slice(0, 5))
  }, [])

  return (
    <View className='ml-4 mt-3'>
      <FlatList
        data={productList}
        renderItem={({item, index}) => {
          return (
            <View className='mx-2'>
              <Listing 
                source={item.imageSource}
                productName={item.productName}
                merchantName={item.merchantName}
                ecoRating={item.ecoRating}
                userRating={item.userRating}
                key={index}
              />
            </View>
          )
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ProductsList