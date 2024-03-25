import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'

export default function Rounded({ image, category, meal }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10, }}>
        <TouchableOpacity>
          <Image source={{ uri: image }} style={{ width: 50, height: 50, borderRadius: 50, }} />
        </TouchableOpacity>
        <View>
          <Text style={{ color: 'white', }}>{category}</Text>
          <Text style={{ color: 'white', }}>250 gramms</Text>
        </View>
      </View>
     <Text style={{ color: 'white', paddingHorizontal: 10, }}>$1.00</Text>
    </View>
  )
}