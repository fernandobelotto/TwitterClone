import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../pages/HomeScreen'
import { View, Text, Button } from 'react-native'
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackScreen
