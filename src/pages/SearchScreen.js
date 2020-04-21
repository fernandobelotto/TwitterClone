import React from 'react'
import { View } from 'react-native'
import { Header, Icon, Avatar } from 'react-native-elements'

const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header containerStyle={{ height: 60, padding: 20, backgroundColor: 'transparent' }}>
        <Avatar rounded />
        <Icon name='twitter' type='feather' color='#1DA1F3' />
        <Icon name='settings' type='feather' color='#1DA1F3' />
      </Header>
    </View>
  )
}

export default SearchScreen
