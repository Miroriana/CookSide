import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons'

export default function Popular({ image, category, meal }) {


    return (
        <View>
            <ImageBackground source={{ uri: image }} style={{
                width: 310, height: 200, marginLeft: 10, borderRadius: 10, }}>
            </ImageBackground>
            <Text style={{ color: 'white', fontWeight:'400', padding: 10, fontSize: 20 }}>{ meal}</Text>
        </View>
    )
}