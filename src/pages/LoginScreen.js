import React from 'react'
import { View } from 'react-native'
import { Icon, Header, Input, Text, Button } from 'react-native-elements'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        containerStyle={{ height: 60, padding: 20, backgroundColor: 'transparent' }}
        centerComponent={() => <Icon name='twitter' type='feather' color='#1DA1F3' />}
      />
      <Text style={{ marginLeft: 10 }} h4>Log in to Twitter.</Text>
      <Input containerStyle={{ marginTop: 20 }} label='Phone, email or username' placeholder='basic input' />
      <Input containerStyle={{ marginTop: 20 }} label='Password' placeholder='basic input' />
      <Text style={{ marginLeft: 10, textAlign: 'center', marginTop: 20, fontSize: 16, color: '#667685' }}>Forgot password?</Text>
      <View style={{ margin: 20, flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <Button onPress={() => navigation.navigate('Drawer')} title='Log in' buttonStyle={{ borderRadius: 20 }} containerStyle={{ width: 100 }} />
      </View>
    </View>
  )
}

export default LoginScreen
