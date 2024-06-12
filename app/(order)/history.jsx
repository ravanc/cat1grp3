import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useState, useEffect } from 'react'

import userOrders from '../../constants/userOrders'
import HistoryCard from '../../components/order-history/HistoryCard'

const OrderHistory = () => {
  const [sortedList, setsortedList] = useState({})

  let shopsortedList = {}
  useEffect(() => {
    userOrders.forEach((item) => {
      if (shopsortedList[item.merchantName] === undefined) {
        shopsortedList[item.merchantName] = [item]
      } else {
        shopsortedList[item.merchantName].push(item)
      }
      })
    setsortedList(shopsortedList)
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
        <Text className='text-xl font-psemibold ml-2'>Order History</Text>
      </View>

      <ScrollView className='pt-3'>
      {
        Object.keys(sortedList).map((store) => 
            <View key={store} className='mb-4'>
              <HistoryCard 
                storeName={store}
                products={sortedList[store]}
              />
            </View>
          )
        }
      </ScrollView>

    </SafeAreaView>
  )
}

export default OrderHistory