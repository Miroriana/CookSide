import React, { useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

export default function Foryou({ image, meal, onpress, tags }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const [rating, setRating] = useState(4.5);
  const handleStarPress = () => {
    setRating(rating + 0.1);
  };

  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <ImageBackground source={{ uri: image }}
          style={{ width: 140, height: 180, marginLeft: 10, borderRadius: 10, overflow: 'hidden' }} />
        <TouchableOpacity onPress={toggleBookmark} style={{ position: 'absolute', top: 10, right: 30 }}>
          <Ionicons name={isBookmarked ? "bookmark" : "bookmark"} size={22} color={isBookmarked ? "orange" : "white"} />
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 18, paddingHorizontal: 10, paddingTop: 10 }}>{meal}</Text>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 15, paddingHorizontal: 10, paddingBottom: 10  }}>{tags}</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 20, paddingRight: 20, gap: -7 }}>
          <TouchableOpacity onPress={handleStarPress}>
            <Ionicons name="star" size={15} color="orange" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontWeight: '500', fontSize: 15, paddingHorizontal: 10, paddingBottom: 10 }}>{rating.toFixed(1)}</Text>
        </View>

      </View>
    </View>


  );
}
