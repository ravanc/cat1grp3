import { SafeAreaView, View, Text, Image } from 'react-native'
import React from 'react'

// Components
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import ProfileHeader from '../../components/profile/profile-header';
import ProfileButton from '../../components/profile/profile-button';

const Profile = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white">

      <ProfileHeader></ProfileHeader>

      <View className='flex-none items-center'>
        <View className='flex-none items-center'>
          <Text className='mt-4'>Your Level:</Text>
          <View className='flex-none justify-center items-center w-[170px] h-[46px] rounded-[50%] border-[1px] border-solid border-[#AAAAAA] mt-2'>
            <Text className='text-[#49824E] font-bold text-2xl'>Seedling</Text>
          </View>
        </View>

        <View className='mt-4'>
          <CircularProgressBase 
            value={-60} 
            radius={150} 
            activeStrokeWidth={20} 
            inActiveStrokeWidth={20} 
            activeStrokeColor={'#49824E'} 
            inActiveStrokeColor={'#DFE9E0'}
          >
            <Image className='w-[264] h-[264] rounded-full bg-[#B0FFB7]' source={require('../../assets/images/profile/radial-gradient.png')}/>
            <View className='absolute flex-none items-center'>
              <Image source={require('../../assets/images/profile/seedling.png')} className='w-[100px] h-[100px]' />
              <Text className='mt-2 text-[14px] font-pregular'><Text className='text-[40px] font-psemibold'>600</Text> /1000*</Text>
            </View>
          </CircularProgressBase>
        </View>

        <Text className='text-lg mt-6 font-pregular'>400 MORE TO <Text className='font-psemibold'>SAPLING</Text></Text>
        
        <Text className='text-xs text-[#979797]'>*tonnes of carbon dioxide saved</Text>

        <View className='flex-row justify-evenly items-center bg-white w-[330px] h-[110px] rounded-2xl border-solid border-4 border-[#A9CBAC] mt-5'>
          <ProfileButton
            source={require('../../assets/images/profile/order-progress.png')}
            route='/(order)/progress'
            action='push'
          />
          <ProfileButton
            source={require('../../assets/images/profile/order-history.png')}
            route='/(order)/history'
            action='push'
          />
          <ProfileButton
            source={require('../../assets/images/profile/logout.png')}
            route='../(auth)/sign-in'
            action='replace'
          />
        </View>
      </View>


    </SafeAreaView>
  )
}

export default Profile