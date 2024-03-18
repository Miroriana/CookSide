import React from 'react'
import{ImageBackground, View, Text} from 'react-native'

export default function Categories({image, meal}) {
  return (
      <View>
          <ImageBackground source={{ uri: image }} style={{ width: 70, height: 70, marginLeft: 20, marginTop: 10, borderRadius: 50, overflow: 'hidden' }}/>
          <Text style={{ textAlign: 'center', color: 'white', }}>{meal}</Text>
    </View>
  )
}
