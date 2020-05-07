import React, { useState } from 'react'
import { View, FlatList, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon, Header, Avatar, Button, SearchBar } from 'react-native-elements'
import { SceneMap, TabView, TabBar } from 'react-native-tab-view'
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
)

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)
const initialLayout = { width: Dimensions.get('window').width }

const SearchScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'For you' },
    { key: 'second', title: 'Trending' },
    { key: 'third', title: 'News' },
    { key: 'four', title: 'Sports' },
    { key: 'five', title: 'Fun' },
    { key: 'six', title: 'Entertainment' }
  ])

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: SecondRoute,
    four: SecondRoute,
    five: SecondRoute,
    six: SecondRoute
  })
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
        <Avatar rounded />
        <Icon name='settings' type='feather' color='#1DA1F3' />
      </Header>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            labelStyle={{ fontWeight: 'bold' }}
            tabStyle={{ width: 'auto' }}
            scrollEnabled
            activeColor='#1DA1F3'
            indicatorStyle={{ backgroundColor: '#1DA1F3' }}
            inactiveColor='#667685'
            style={{ backgroundColor: 'white' }}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
})
