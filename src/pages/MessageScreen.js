import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { Header, Avatar, Icon } from 'react-native-elements'
import MessageItem from '../components/MessageItem'

const MessageScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        containerStyle={{
          height: 60,
          padding: 20,
          backgroundColor: 'transparent'
        }}
      >
        <Avatar rounded />
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#13171A' }}>Messages</Text>
        <Icon name='settings' type='feather' color='#1DA1F3' />
      </Header>
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => {
          return (
            <MessageItem />
          )
        }}
      />
    </View>
  )
}

export default MessageScreen
