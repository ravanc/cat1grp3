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
    <FlatList
      className='pl-4 mt-3'
        data={productList}
        renderItem={({item, index}) => {
          return (
          <View className='px-2'>
            <Listing 
              source={item.imageSource}
              productName={item.productName}
              merchantName={item.merchantName}
              ecoRating={item.ecoRating}
              userRating={item.userRating}
              price={item.productPrice}
              key={index}
            />
          </View>
        )
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default ProductsList