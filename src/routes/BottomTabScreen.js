import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from '../stacks/HomeStackScreen'
import SearchStackScreen from '../stacks/SearchStackScreen'
import MessageStackScreen from '../stacks/MessageStackScreen'
import NotificationStackScreen from '../stacks/NotificationStackScreen'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

export default function BottomTabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#1DA1F2',
        inactiveTintColor: '#667683',
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type='feather' name='home' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='SearchStack'
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type='feather' name='search' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='NotificationStack'
        component={NotificationStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type='feather' name='bell' color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='MessageStack'
        component={MessageStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon type='feather' name='mail' color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
