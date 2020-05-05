import React from 'react'
import { View, FlatList } from 'react-native'
import { Icon, Header, Avatar, Button } from 'react-native-elements'
import Tweet from '../components/Tweet'

const HomeScreen = ({ navigation }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
        containerStyle={{
          height: 60,
          padding: 20,
          backgroundColor: 'transparent',
        }}
      >
        <Avatar rounded />
        <Icon name='twitter' type='feather' color='#1DA1F3' />
        <Icon name='star' type='feather' color='#1DA1F3' />
      </Header>
      <FlatList
        backgroundColor='white'
        keyExtractor={(i) => i}
        data={list}
        renderItem={({ item }) => {
          return <Tweet />
        }}
      />
    </View>
  )
}

export default HomeScreen
