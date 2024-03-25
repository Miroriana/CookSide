import React, { useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Feather, AntDesign, Ionicons } from 'react-native-vector-icons'

export default function Popular({ image, category, meal, onpress }) {

  const [rating, setRating] = useState(4.5);
  const handleStarPress = () => {
    setRating(rating + 0.1); 
  };
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <TouchableOpacity onPress={onpress}>
      <ImageBackground source={{ uri: image }} style={{
        width: 250, height: 150, marginLeft: 10, borderRadius: 10, overflow: 'hidden'
      }}>
        <View style={{ position: 'absolute', bottom: 0, }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, position: 'absolute', bottom: 15, left: 10 }}>{meal}</Text>
          <Text style={{ color: 'white', position: 'absolute', fontSize: 15, bottom: 0, left: 10, fontWeight: '400' }}>By Emma Harvest</Text>
        </View>

        <TouchableOpacity onPress={handleBookmarkToggle}>
      <Ionicons 
        name={isBookmarked ? "bookmark" : "bookmark"} size={22} color={isBookmarked ? "orange" : "white"} 
        style={{ position: 'absolute', top: 10, right: 15,  }} 
      />
    </TouchableOpacity>
        <View style={{ position: 'absolute', flexDirection: 'row', bottom: 15, right: 15, gap: 15 }}>
          <TouchableOpacity onPress={handleStarPress}>
            <AntDesign name="star" size={12} color="red" style={{ position: 'absolute', bottom: 0, right: 27, backgroundColor: 'white', borderRadius: 10, padding: 2 }} />
          </TouchableOpacity>
          <Text style={{ color: 'white', position: 'absolute', fontSize: 15, fontWeight: 'bold', bottom: 0, right: 3 }}>{rating.toFixed(1)}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}
