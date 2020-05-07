import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabScreen from './BottomTabScreen'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { Avatar, Divider, Icon } from 'react-native-elements'

import DrawerButton from '../components/DrawerButton'

const Drawer = createDrawerNavigator()

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: '80%',
      }}
      drawerContent={({ navigation }) => {
        return (
          <View style={{ marginTop: 10, marginHorizontal: 30 }}>
            <Avatar rounded size={50} />
            <Text>Fernando Gabriel</Text>
            <Text>@fernandobeloto</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity activeOpacity={1}>
                <Text>63</Text>
                <Text>Following</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>63</Text>
                <Text>Following</Text>
              </TouchableOpacity>
            </View>
            <Divider />
            <DrawerButton title='Profile' icon='user' />
            <DrawerButton title='Lists' icon='file-text' />
            <DrawerButton title='Topics' icon='message-circle' />
            <DrawerButton title='Bookmarks' icon='bookmark' />
            <DrawerButton title='Moments' icon='zap' />
            <Divider />
            <DrawerButton title='Twitter Ads' icon='external-link' />
            <Divider />
            <TouchableOpacity>
              <Text>Settings and privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Help Center</Text>
            </TouchableOpacity>
            <Divider />
            <View style={{ flexDirection: 'row' }}>
              <Icon name='sun' type='feather' />
              <Icon name='grid' type='feather' />
            </View>
          </View>
        )
      }}
    >
      <Drawer.Screen name='Home' component={BottomTabScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen
