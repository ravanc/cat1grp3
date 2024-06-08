import React, { useState } from 'react'
import { Alert, View, AppState, Image, Text, TextInput, SafeAreaView } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Link } from 'expo-router'

import CustomButton from '../../components/generic/CustomButton'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <>
      <SafeAreaView className="flex-none items-center h-full w-full bg-white">

        <Text className="text-3xl font-bold mt-2">Sign Up</Text>

        <Image source={require('../../assets/images/sign-in/logo.png')} className="w-[96px] h-[96px] mt-8" />

        {/* Login Fields */}
        <View className="mt-10">
          <View className="flex-row items-center mb-2">
            <Image 
              source={require('../../assets/images/sign-in/user.png')}
              className="ml-[4px]"
            />
            <Text className="ml-[6px] text-lg">Email / Username</Text>
          </View>
          <View className="flex-none justify-center h-[32px] w-[80vw] rounded-lg bg-[#E5E5E5] pl-[8px] pr-[5px]">
            <TextInput
              onChangeText={(text) => {setEmail(text)}}
              value={email}
              autoCapitalize={'none'}
            />
          </View>
        </View>

        <View className="mt-6">
          <View className="flex-row items-center mb-2">
            <Image 
              source={require('../../assets/images/sign-in/lock.png')}
              className="ml-[4px]"
            />
            <Text className="ml-[6px] text-lg">Password</Text>
          </View>
          <View className="flex-none justify-center h-[32px] w-[80vw] rounded-lg bg-[#E5E5E5] pl-[8px] pr-[5px]">
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              autoCapitalize={'none'}
            />
          </View>
        </View>

        <View className="mt-6">
          <View className="flex-row items-center mb-2">
            <Image 
              source={require('../../assets/images/sign-in/lock.png')}
              className="ml-[4px]"
            />
            <Text className="ml-[6px] text-lg">Confirm Password</Text>
          </View>
          <View className="flex-none justify-center h-[32px] w-[80vw] rounded-lg bg-[#E5E5E5] pl-[8px] pr-[5px]">
            <TextInput
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={true}
              autoCapitalize={'none'}
            />
          </View>
        </View>


        <CustomButton
          text="Sign Up"
          containerStyle="w-[80vw] h-[48px] rounded-lg mt-14"
          textStyle="text-[20px]"
          handlePress={() => {
            if (password === confirmPassword) {
              signUpWithEmail()
            } else {
              Alert.alert('Error!', 'Passwords do not match.')
            }
          }}
        />

        <Text className="text-xl mt-3">OR</Text>

        <CustomButton
          text="Sign in with Google"
          containerStyle="w-[80vw] h-[48px] rounded-lg mt-3 bg-[#E5E5E5]"
          textStyle="text-[20px] text-black"
        />

        <View className="mt-2">
          <Text>Have an account? <Link href='./sign-in' className='underline'>Log in</Link></Text>
        </View>


      </SafeAreaView>

      
    </>


    // <View>
    //   <View>
    //     <Input
    //       label="Email"
    //       leftIcon={{ type: 'font-awesome', name: 'envelope' }}
    //       onChangeText={(text) => setEmail(text)}
    //       value={email}
    //       placeholder="email@address.com"
    //       autoCapitalize={'none'}
    //     />
    //   </View>
    //   <View>
    //     <Input
    //       label="Password"
    //       leftIcon={{ type: 'font-awesome', name: 'lock' }}
    //       onChangeText={(text) => setPassword(text)}
    //       value={password}
    //       secureTextEntry={true}
    //       placeholder="Password"
    //       autoCapitalize={'none'}
    //     />
    //   </View>
    //   <View>
    //     <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
    //   </View>
    //   <View>
    //     <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
    //   </View>
    // </View>
  )
}

export default Auth