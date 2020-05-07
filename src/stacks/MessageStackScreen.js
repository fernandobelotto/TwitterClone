import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { View, Text, Button } from 'react-native'
import MessageScreen from '../pages/MessageScreen'

const Stack = createStackNavigator()

const MessageStackScreen = () => {
  function Home2 () {
    return (
      <View>
        <Text>testeee2</Text>
      </View>
    )
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='home1'
        component={MessageScreen}
      />
      <Stack.Screen
        name='home2'
        component={Home2}
      />
    </Stack.Navigator>
  )
}

export default MessageStackScreen
