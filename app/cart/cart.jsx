import { SafeAreaView, TouchableOpacity, Image, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useState, useEffect } from 'react'

import cart from '../../constants/dummyCart'
import CustomButton from '../../components/generic/CustomButton'
import StoreCard from '../../components/cart/StoreCard'

const Cart = () => {
  const [total, setTotal] = useState(0)
  const [sortedCart, setSortedCart] = useState({})

  let shopSortedCart = {}
  useEffect(() => {
    cart.forEach((item) => {
      if (shopSortedCart[item.merchantName] === undefined) {
        shopSortedCart[item.merchantName] = [item]
      } else {
        shopSortedCart[item.merchantName].push(item)
      }
      })
    setSortedCart(shopSortedCart)
  }, [])


  return (
    <SafeAreaView className='h-full w-full bg-white'>
      <View className='flex-row items-center pb-3'>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className='ml-2'
        >
          <Image source={require('../../assets/images/general/back.png')} className='w-[24px] h-[24px]' />
        </TouchableOpacity>
        <Text className='text-xl font-psemibold ml-2'>My Cart</Text>
      </View>

      <ScrollView>
        {
        Object.keys(sortedCart).map((store) => 
            <View key={store} className='mb-4'>
              <StoreCard 
                storeName={store}
                products={sortedCart[store]}
                total={total}
                setTotal={setTotal}
              />
            </View>
          )
        }
      </ScrollView>
      
      <View className='border-t-[.5px] border-[#BBBBBB] h-16 flex-row items-center'>
        <Text className='font-pmedium ml-4 text-lg'>Total: ${total.toFixed(2)}</Text>
        <CustomButton 
          text={'Check Out'}
          textStyle={'font-pbold text-lg'}
          containerStyle={'ml-auto mr-4 rounded-2xl py-2 px-5'}
        />
      </View>
      
    </SafeAreaView>
  )
}

export default Cart