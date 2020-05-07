import React from 'react'
import { Text, View } from 'react-native'

const MessageItem = () => {
  return (
    <View style={{ height: 50 }}>
      <View style={{ flexDirection: 'row' }}>
        <Text>Mikaeri Ohana</Text>
        <Text>@mikaeriohana</Text>
      </View>
      <Text>Consequat incididunt eu pariatur officia enim excepteur culpa elit.</Text>
    </View>
  )
}

export default MessageItem
