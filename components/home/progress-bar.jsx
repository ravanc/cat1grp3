import { View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress, setProgress] = useState();

    useEffect(() => {
        
    }, []);

  return (
    <View className='h-[6px] w-30 bg-[#E5E5E5] rounded-full overflow-hidden'>
      <View className='h-full w-2/3 bg-primary'></View>
    </View>
  )
}

export default ProgressBar