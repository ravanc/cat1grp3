import { View, Text, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'

const EcoRatingProgress = ({ecoRating}) => {
//   const [primaryColor, setColor] = useState('#49824E')
  const rating = (ecoRating / 5) * 100;
  let status = '' ;
  let primaryColor = '';
  let secondaryColor = '';

  if (ecoRating < 3) {
    status = 'Bad';
    primaryColor = '#FA4646'
    secondaryColor = '#FECACA'
  } else if (ecoRating < 4 && ecoRating >= 3) {
    status = 'Good';
    primaryColor = '#FBBF24'
    secondaryColor = '#FEF3C7'
  } else {
    status = 'Excellent'
    primaryColor = '#49824E'
  }

//   useEffect(() => {
//       if (ecoRating < 3) {
//         setColor('#FA4646');
//       } else if (ecoRating < 4 && ecoRating >= 3) {
//         setColor('#B3E3B8');
//       } else {
//         setColor('#49824E');
//       }
//   }, [])
  
  return (
    <View className='flex justify-center items-center pt-4 my-3'>
      <CircularProgressBase 
        value={-rating} 
        radius={60} 
        activeStrokeWidth={10} 
        inActiveStrokeWidth={10} 
        activeStrokeColor={primaryColor} 
        inActiveStrokeColor={secondaryColor}
      >
        <View className='absolute flex-none items-center'>
          <Image source={require('../../assets/images/store-page/leaf-green.png')} className='w-[40px] h-[40px]' tintColor={primaryColor} />
          <Text className={'mt-2 text-[14px] font-pregular'} style={{ color: primaryColor }}>{Number(ecoRating).toFixed(1)}/5.0</Text>
        </View>
      </CircularProgressBase>
      <Text className={`mt-2 font-pregular`}>Eco-rating: <Text className={'font-psemibold'} style={{ color: primaryColor }}>{status}</Text></Text>
    </View>
  )
}

export default EcoRatingProgress