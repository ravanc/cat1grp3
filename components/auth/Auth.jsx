import React, { useState } from 'react'
import { Alert, View, AppState, Image, Text, TextInput } from 'react-native'
import { supabase } from '../../lib/supabase'

import CustomButton from '../generic/CustomButton'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

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
    {/* Login Fields */}
      <View className="flex-none items-center">

        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <Image 
              source={require('../assets/images/sign-in/user.png')}
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

        <View>
          <View className="flex-row items-center mb-2">
            <Image 
              source={require('../assets/images/sign-in/lock.png')}
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

        <Text className="underline self-end mr-[10vw] mt-2 text-[16px]">Forgot Password</Text>

        <CustomButton
          text="Sign In"
          containerStyle="w-[80vw] h-[48px] rounded-lg mt-14"
          textStyle="text-[20px]"
        />

        <Text className="text-xl mt-3">OR</Text>

        <CustomButton
          text="Sign in with Google"
          containerStyle="w-[80vw] h-[48px] rounded-lg mt-3 bg-[#E5E5E5]"
          textStyle="text-[20px] text-black"
        />

      </View>

      
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