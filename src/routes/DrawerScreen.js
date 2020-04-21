import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabScreen from './BottomTabScreen'

const Drawer = createDrawerNavigator()

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={BottomTabScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen
