import React from 'react'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import{Feather} from 'react-native-vector-icons'

export default function Foryou({image, category}) {
  return (
      <View>
          <ImageBackground source={{ uri: image }}
              style={{ width: 140, height: 180, marginLeft: 10, borderRadius: 10, overflow: 'hidden' }} />     
          <Feather name="bookmark" size={20} color="yellow" style={{ position: 'absolute', top: 10, right: 30, backgroundColor: 'white', borderRadius: 20, padding: 5 }} />
              
          <Text>{category}</Text>
    </View>
  )
}
