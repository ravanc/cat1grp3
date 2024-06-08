import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Image } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

const TabBarIcon = ({ icon, color, name, focused }) => {
  return (
  <View>
    <Image
      resizeMode='contain'
      source={icon}
      tintColor={color}
    />
  </View>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#49824E',
        tabBarInactiveTintColor: '#A9CBAC',
        tabBarStyle: {
          backgroundColor: '#EBFAED'
        }
      }}>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name='Home'
              color={color}
              icon={require('../../assets/images/tab-icons/home.png')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='categories'
        options={{
          title: 'Categories',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name='Categories'
              color={color} 
              icon={require('../../assets/images/tab-icons/categories.png')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='discover'
        options={{
          title: 'Discover',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name='Discover'
              color={color} 
              icon={require('../../assets/images/tab-icons/discover.png')}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name='Profile'
              color={color} 
              icon={require('../../assets/images/tab-icons/profile.png')}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
