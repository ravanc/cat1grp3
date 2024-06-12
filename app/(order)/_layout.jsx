import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const OrderLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="history"
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen
          name="progress"
          options={{
            headerShown: false,
          }} 
        />
      </Stack>
    </>
  )
}

export default OrderLayout