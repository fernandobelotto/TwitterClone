import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../pages/HomeScreen'
import { View, Text, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import SearchScreen from '../pages/SearchScreen'

const Stack = createStackNavigator()

const SearchStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
    </Stack.Navigator>
  )
}

export default SearchStackScreen
