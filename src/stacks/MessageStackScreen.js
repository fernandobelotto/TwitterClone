import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { View, Text, Button } from 'react-native'

const Stack = createStackNavigator()

const MessageStackScreen = () => {
  function Home1 ({ navigation }) {
    return (
      <View>
        <Text>testeee1</Text>
        <Button title='next page' onPress={() => { navigation.navigate('home2') }} />
      </View>
    )
  }
  function Home2 () {
    return (
      <View>
        <Text>testeee2</Text>
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home1'
        component={Home1}
      />
      <Stack.Screen
        name='home2'
        component={Home2}
      />
    </Stack.Navigator>
  )
}

export default MessageStackScreen
