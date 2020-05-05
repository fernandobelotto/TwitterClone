import React from 'react'
import { Text, View } from 'react-native'
import { Icon, Avatar, Divider } from 'react-native-elements'
import { divide } from 'react-native-reanimated'

const Tweet = () => {
  return (
    <View style={{ marginRight: 80, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <Avatar rounded size={50} containerStyle={{ marginHorizontal: 10 }} />
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: '#12171A' }}>
              fernando
            </Text>
            <Text style={{ marginLeft: 5, fontSize: 16, color: '#667684' }}>
              @mazinhars
            </Text>
          </View>
          <Text style={{ fontSize: 16, color: '#12171A' }}>
            Ulla;sdfas;lfkjas;ldfkjas;dlfkjas;flks;aslkdjf;askldjf;aslkfjas;dkjjmco
            tempor voluptate fugiat pariatur laboris minim amet quis proident
            labore.
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name='message-circle'
                size={15}
                type='feather'
                color='#6B7984'
              />
              <Text style={{ marginLeft: 5, fontSize: 12, color: '#667684' }}>
                12
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='repeat' type='feather' size={15} color='#6B7984' />
              <Text style={{ marginLeft: 5, fontSize: 12, color: '#667684' }}>
                12
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='heart' type='feather' size={15} color='#6B7984' />
              <Text style={{ marginLeft: 5, fontSize: 12, color: '#667684' }}>
                12
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='share-2' type='feather' size={15} color='#6B7984' />
              <Text style={{ marginLeft: 5, fontSize: 12, color: '#667684' }}>
                12
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Divider style={{ marginTop: 10 }} />
    </View>
  )
}

export default Tweet
