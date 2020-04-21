import React from 'react'
import { View, FlatList } from 'react-native'
import { Icon, Header, Avatar, Button } from 'react-native-elements'
import Tweet from '../components/Tweet'

const HomeScreen = ({ navigation }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <View style={{ flex: 1 }}>
      <Header containerStyle={{ height: 60, padding: 20, backgroundColor: 'transparent' }}>
        <Avatar rounded />
        <Icon name='twitter' type='feather' color='#1DA1F3' />
        <Icon name='star' type='feather' color='#1DA1F3' />
      </Header>
      <FlatList
        keyExtractor={i => i}
        data={list}
        renderItem={({ item }) => {
          return (
            <Tweet />
          )
        }}
      />
      <View style={{ margin: 20, flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <Button onPress={() => navigation.navigate('Drawer')} title='Log in' buttonStyle={{ borderRadius: 20 }} containerStyle={{ width: 100 }} />
      </View>
    </View>
  )
}

export default HomeScreen
