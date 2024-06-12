import { View, Text, Image } from 'react-native'
import React from 'react'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'

const EcoRatingProgress = ({ecoRating}) => {
  const rating = (ecoRating / 5) * 100;
  let status = '' ;
  if (ecoRating < 3) {
    status = 'Bad';
  } else if (ecoRating < 4 && ecoRating >= 3) {
    status = 'Good';
  } else {
    status = 'Excellent'
  }

  let statusColor = '';
  if (status == 'Bad') {
    statusColor = '#FA4646';
  } else if (status == 'Good') {
    statusColor = '#B3E3B8';
  } else {
    statusColor = '#49824E';
  }

  const textColor = `text-[${statusColor}]`;

  return (
    <View className='flex justify-center items-center pt-4 my-3'>
          <CircularProgressBase 
            value={-rating} 
            radius={60} 
            activeStrokeWidth={10} 
            inActiveStrokeWidth={10} 
            activeStrokeColor={statusColor} 
            inActiveStrokeColor={'#DFE9E0'}
          >
            <View className='absolute flex-none items-center'>
              <Image source={require('../../assets/images/store-page/leaf-green.png')} className='w-[40px] h-[40px]' />
              <Text className='mt-2 text-[14px] font-pregular text-primary'>{ecoRating}/5.0</Text>
            </View>
          </CircularProgressBase>
              <Text className='mt-2 font-pregular text-primary'>Eco-rating: <Text className={`font-psemibold ${textColor}`}>{status}</Text></Text>
        </View>
  )
}

export default EcoRatingProgress