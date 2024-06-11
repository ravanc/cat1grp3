import { View, Text, SafeAreaView, Modal, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react'
import { router } from 'expo-router';

import ImageCarousel from '../../components/product-description/ImageCarousel'
import CustomButton from '../../components/generic/CustomButton';
import QuantitySelector from '../../components/product-description/QuantitySelector';

const ProductDescription = () => {
  const { product, source, merchantName, ecoRating, userRating, price } = useLocalSearchParams()
  const [modalVisible, setModalVisible] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  // tap outside of the modal to close the modal
  const handleOverlayPress = (event) => {
    const {locationY} = event.nativeEvent
    const modalHeight = Dimensions.get('window').height*0.5
    if (locationY > modalHeight) {
      console.log('close')
    };
  }
 
  return (
    <SafeAreaView className='bg-white h-full w-full'>
      <View className='flex-row items-center'>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className='ml-2'
        >
          <Image source={require('../../assets/images/general/back.png')} className='w-[24px] h-[24px]' />
        </TouchableOpacity>
        <Text className='text-xl font-psemibold ml-2'>Product Description</Text>
      </View>
      <ScrollView className='mt-2'>
        <ImageCarousel />
        <View className='px-6 py-4'>
          <Text className='text-xl font-psemibold'>{ product }</Text>
          <Text className='text-lg font-pmedium'>${ price } <Text className='font-plight text-sm text-[#EF4444]'>Get 80% off with vouchers applied!</Text></Text>
          <Text className='font-plight'>{ merchantName }</Text>
          <Text className="italic text-primary">This brand uses sustainable packaging</Text>
          <View className='flex-row items-center mb-2 mt-1'>
            <Image source={require('../../assets/images/general/leaf-green.png')} className='h-[10px] w-[10px] mr-[2px]' />
            <Text className='font-plight mr-[2px]'>{ ecoRating }</Text>
            <Image source={require('../../assets/images/general/star-yellow.png')} className='h-[12px] w-[12px] mr-[2px]'/>
            <Text className='font-plight'>{ userRating }</Text>
          </View>
          <Text className='text-lg font-pmedium mt-2'>Product Description</Text>
          <Text className='font-plight leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus quaerat harum ea minus odit doloremque. Sapiente a sequi placeat, veniam sit laboriosam vitae facere quidem reprehenderit, obcaecati officiis praesentium! {'\n'}{'\n'}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor veritatis maiores deleniti eligendi quos, dolorum, mollitia harum molestias libero quasi magni. Aliquam id iusto minus? Eveniet distinctio qui est eius?</Text>
          <View className='self-center bg-[#D0FFD5] rounded-2xl py-3 px-4 mt-6'>
            <View className='flex-row items-center'>
              <Image source={require('../../assets/images/product-description/leaf-big.png')} />
              <Text className='text-lg ml-3 font-pregular'>Sustainability Efforts</Text>
            </View>
            <Text className='font-plight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quae, molestias quas fugit ex veritatis atque praesentium totam provident illo nostrum eius dolorem ad animi incidunt doloremque quidem, porro tempore!</Text>
          </View>
        </View>  
      </ScrollView>
      
      <View className='h-16 flex-row justify-center items-center'>
        <CustomButton 
          text={'Go to Shop'}
          containerStyle={'flex-1 py-2 px-4 bg-[#E8E8E8] h-16'}
          textStyle={'text-lg text-primary'}
          handlePress={() => {}}
        />
        <CustomButton 
          text={'Add to Cart'}
          containerStyle={'flex-1 py-2 px-4 h-16'}
          textStyle={'text-lg'}
          handlePress={() => openModal()}
        />
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal} // for android
      >
        <View className="flex-1 justify-end bg-black/50 h-1/2 border-2">
          <TouchableOpacity className='h-full' onPress={() => closeModal()}/>
          <View className="bg-white h-1/2 rounded-tl-2xl rounded-tr-2xl">
            <View className='flex-row p-6'>
              <Image
                source={ source }
                className='rounded-2xl h-[130px] w-[145px] border-[.5px] border-[#AAAAAA]' resizeMode='cover'
              />
              <View className='self-end ml-3'>
                <Text className='font-medium text-primary text-xl'>${ price }</Text>
                <Text className='font-plight text-[#555555]'>Stock: 120</Text>
              </View>
            </View>
            <View className='h-[1px] bg-[#333333] w-[90%] self-center' />
            
            <View className='p-6 h-[275px]'>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
              <CustomButton 
                text={'Add to Cart'}
                containerStyle={'self-end mt-auto  py-2 px-4 rounded-lg'}
                textStyle={'text-lg'}
                handlePress={() => openModal()}
              />
            </View>

          </View>



        </View>
      </Modal>
    </SafeAreaView>
)
}

export default ProductDescription