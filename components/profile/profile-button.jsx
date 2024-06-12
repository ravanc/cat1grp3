import { Image, TouchableHighlight } from 'react-native'
import { router } from 'expo-router'
import React from 'react'

const ProfileButton = ({ source, route, action }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={'#EEEEEE'}
      onPress={()=> {
        if (action == 'push') {
          router.push(route)
        } else if (action == 'replace') {
          router.replace(route)
        }
      }}
      className='rounded-lg'
    >
      <Image source={source} />
    </TouchableHighlight>
  )
}

export default ProfileButton 