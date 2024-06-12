import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

const ProgressTab = ({ text, option, selectedTab, setSelectedTab }) => {
  return (
    <TouchableHighlight 
      className={`justify-center rounded-t-lg h-10 mx-3 w-[30%] ${(selectedTab == option) && 'border-b-primary border-b-2'}`}
      underlayColor={'#DDDDDD'}
      activeOpacity={0.8}
      onPress={() => setSelectedTab(option)}
    >
      <Text className='font-plight text-center text-[16px]'>{text}</Text>
    </TouchableHighlight>
  )
}

export default ProgressTab