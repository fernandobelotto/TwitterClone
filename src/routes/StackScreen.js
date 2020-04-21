import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../pages/LoginScreen'

import DrawerScreen from './DrawerScreen'

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='first'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Drawer'
          component={DrawerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackScreen
