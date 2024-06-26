import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router';

const Carousel = () => {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      id: 1,
      image: require('../../assets/images/home/voucher.png'),
      description: "Men's Fashion",
      route: "/categories"
    },
    {
      id: 2,
      image: require('../../assets/images/home/voucher.png'),
      description: 'Description',
      route: "/discover"
    },
    {
      id: 3,
      image: require('../../assets/images/home/voucher.png'),
      description: 'Description',
      route: "/categories"

    },
    {
      id: 4,
      image: require('../../assets/images/home/voucher.png'),
      description: 'Description',
      route: "/discover"
    },
  ];
  //handle scroll
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log(scrollPosition);
    const index = Math.round(scrollPosition / screenWidth);
    // console.log({index});
    setActiveIndex(index);
    
  };
  // render images & text
  const renderItem = ({ item, index }) => {
    return (
      // Could be simplified to w-full
      <View className='mt-3' style={{ width: screenWidth}}> 
        <TouchableOpacity onPress={() => router.push(item.route)}>
          <View className='flex items-start ml-10 rounded-2xl overflow-hidden border-[1px] border-[#BBBBBB]' style={{width: Dimensions.get('screen').width*0.8}}>
            <Image source={item.image} className='w-[100%] height-[160px]' resizeMode='cover'/>
            <View className='flex-row items-center w-full bg-white'>
              <Text className='font-pregular text-s p-2'>{item.description}</Text>
              <View className='flex-row gap-1 ml-auto mr-2'>
                <Image source={require('../../assets/images/general/leaf-green.png')} className='w-[13px] h-[13px]' />
                <Image source={require('../../assets/images/general/leaf-green.png')} className='w-[13px] h-[13px]'/>
                <Image source={require('../../assets/images/general/leaf-green.png')} className='w-[13px] h-[13px]'/>
                <Image source={require('../../assets/images/general/leaf-grey.png')} className='w-[13px] h-[13px]'/>
                <Image source={require('../../assets/images/general/leaf-grey.png')} className='w-[13px] h-[13px]'/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  };
  // render dot indicators
  const renderDotIndicators = () => {
    
    return (
      images.map((dot, index) => {
        if (activeIndex == index) {
          return (
            <View
              key={index}
              className='bg-[#49824E] h-[10px] w-[10px] rounded-full'
            >
            </View>
          )
          
        } else {
          return (
            <View
              key={index} 
              className='bg-[#CFCFCF] h-[10px] w-[10px] rounded-full'
            >
            </View>
          )
        }
        
      })
    )
    
  }
  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      />
      <View className='flex-row justify-center gap-3 mt-0.5'>
        {renderDotIndicators()}
      </View>
      
    </View>
    //items-center
  )
}

export default Carousel