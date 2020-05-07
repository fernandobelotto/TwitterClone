import React, { useRef } from 'react'
import { View, FlatList } from 'react-native'
import { Icon, Header, Avatar } from 'react-native-elements'
import Tweet from '../components/Tweet'
import ActionButton from 'react-native-action-button'

const HomeScreen = ({ navigation }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const meu = useRef(null)
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
      <ActionButton
        buttonColor='#1DA1F3'
        onPress={() => {
          meu.current.snapTo(0)
        }}
      />

    </View>
  )
}

export default HomeScreen
