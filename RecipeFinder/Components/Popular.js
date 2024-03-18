import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons'

export default function Popular({ image, category, meal }) {


  return (
    <View>
      <ImageBackground source={{ uri: image }} style={{
        width: 250, height: 150, marginLeft: 10, borderRadius: 10, overflow: 'hidden'
      }}>
        <Text style={{ color: 'black', fontWeight: 'bold', position: 'absolute', bottom: 10, left: 10 }}>{meal}</Text>
        <Text style={{ color: 'black', fontWeight: 'bold', position: 'absolute', bottom: 10, right: 10 }}>{category}</Text>
        <TouchableOpacity>
        <Feather name="bookmark" size={20} color="yellow" style={{ position: 'absolute', top: 10, right: 15, backgroundColor: 'white', borderRadius: 20, padding: 5 }} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
