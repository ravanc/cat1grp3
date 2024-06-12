import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'

const ImageCarousel = () => {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      id: 1,
      image: require('../../assets/images/product-description/product.png'),
      description: "Men's Fashion"
    },
    {
      id: 2,
      image: require('../../assets/images/product-description/product.png'),
      description: 'Description'
    },
    {
      id: 3,
      image: require('../../assets/images/product-description/product.png'),
      description: 'Description'
    },
    {
      id: 4,
      image: require('../../assets/images/product-description/product.png'),
      description: 'Description'
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
      <View style={{ width: screenWidth }}> 
        <View className='flex items-start overflow-hidden w-full h-[250px]' >
          <Image source={item.image} className='w-[100%]' resizeMode='cover'/>
        </View>
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
      <View className='flex-row justify-center gap-3 -mt-8 mb-2'>
        {renderDotIndicators()}
      </View>
      
    </View>
  )
}

export default ImageCarousel