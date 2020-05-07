import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const DrawerButton = ({ title, navigation, icon }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name={icon} type='feather' color='#687585' />
        <Text style={{ color: '#13171A' }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DrawerButton

const styles = StyleSheet.create({})
