import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Listing from '../generic/Listing'

const ProductsList = () => {
    const items = [
        {
            source: '../../assets/images/home/product.png', 
            productName: 'Blouse',
            merchantName: 'Not SHEIN',
            ecoRating: '5.0',
            userRating: '5.0'
        },
        {
            source: '../../assets/images/home/product.png', 
            productName: 'Blouse',
            merchantName: 'Not SHEIN',
            ecoRating: '5.0',
            userRating: '5.0'
        },
        {
            source: '../../assets/images/home/product.png', 
            productName: 'Blouse',
            merchantName: 'Not SHEIN',
            ecoRating: '5.0',
            userRating: '5.0'
        },
        {
            source: '../../assets/images/home/product.png', 
            productName: 'Blouse',
            merchantName: 'Not SHEIN',
            ecoRating: '5.0',
            userRating: '5.0'
        },
    ];
  return (
    <View className='ml-4 mt-3'>
        <FlatList
            data={items}
            renderItem={({item, index}) => {
                return (
                    <View className='mx-2'>
                        <Listing
                            source={require('../../assets/images/home/product.png')}
                            productName={item.productName}
                            merchantName={item.merchantName}
                            ecoRating={item.ecoRating}
                            userRating={item.userRating}
                            styles={{}}
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