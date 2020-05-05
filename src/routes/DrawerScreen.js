import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabScreen from './BottomTabScreen'
import { Text, View, Button } from 'react-native'

const Drawer = createDrawerNavigator()

const DrawerScreen = () => {
  function Stack() {
    return (
      <View>
        <Text>STACK</Text>
      </View>
    )
  }
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: '80%',
      }}
      drawerContent={({ navigation }) => {
        return (
          <View style={{ marginTop: 10, marginHorizontal: 30 }}>
            <Text>aobaaa</Text>
            <Button title='home' onPress={() => navigation.navigate('Home')} />
            <Button
              title='stack'
              onPress={() => navigation.navigate('Stack')}
            />
          </View>
        )
      }}
    >
      <Drawer.Screen name='Home' component={BottomTabScreen} />
      <Drawer.Screen name='Stack' component={Stack} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen
