import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../pages/HomeScreen'
import SearchScreen from '../pages/SearchScreen'
import MessageScreen from '../pages/MessageScreen'
import NotificationScreen from '../pages/NotificationScreen'

const Tab = createBottomTabNavigator()

export default function BottomTabScreen () {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Notifications' component={NotificationScreen} />
      <Tab.Screen name='Message' component={MessageScreen} />
    </Tab.Navigator>
  )
}
