import React from 'react'
import{ImageBackground, View, Text} from 'react-native'

export default function Categories({image, category}) {
  return (
      <View>
          <ImageBackground source={{ uri: image }} style={{ width: 60, height: 60, marginLeft: 20, marginTop: 10, borderRadius: 60, overflow: 'hidden' }}/>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight:'500', marginLeft: 15, fontSize: 15 }}>{category}</Text>
    </View>
  )
}
