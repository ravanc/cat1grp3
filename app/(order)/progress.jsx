import { SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { useState, useEffect } from 'react'

import ProgressTab from '../../components/order-progress/tab'
import ProgressCard from '../../components/order-progress/ProgressCard'
import userOrders from '../../constants/userOrders'

const OrderProgress = () => {
  const [selectedTab, setSelectedTab] = useState('toShip')
  const [sortedList, setsortedList] = useState({})

  let shopsortedList = {}
  useEffect(() => {
    let filteredOrders = userOrders.filter((order) => (order.orderStatus == selectedTab))

    filteredOrders.forEach((item) => {
      if (shopsortedList[item.merchantName] === undefined) {
        shopsortedList[item.merchantName] = [item]
      } else {
        shopsortedList[item.merchantName].push(item)
      }
      })
    setsortedList(shopsortedList)
  }, [selectedTab])

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
        <Text className='text-xl font-psemibold ml-2'>Order Progress</Text>
      </View>

      <View className='flex-row justify-evenly w-full'>
        <ProgressTab 
          text={'To Ship'} 
          option={'toShip'}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <ProgressTab 
          text={'To Receive'} 
          option={'toReceive'}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </View>

      <ScrollView className='pt-3'>
      {
        Object.keys(sortedList).map((store) => 
            <View key={store} className='mb-4'>
              <ProgressCard 
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

export default OrderProgress