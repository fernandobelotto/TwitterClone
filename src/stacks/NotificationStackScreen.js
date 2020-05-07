import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from '../pages/NotificationScreen'
import { View, Text, Button } from 'react-native'
import { Icon } from 'react-native-elements'

const Stack = createStackNavigator()

const NotificationStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
    </Stack.Navigator>
  )
}

export default NotificationStackScreen
