import { Image, TouchableHighlight } from 'react-native'
import { router } from 'expo-router'
import React from 'react'

const ProfileButton = ({ source, route }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={'#EEEEEE'}
      onPress={()=> {
        router.replace(route)
      }}
      className='rounded-lg'
    >
      <Image source={source} />
    </TouchableHighlight>
  )
}

export default ProfileButton 