import React, { useState, useEffect } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import Foryou from '../Components/Foryou';
const { width, height } = Dimensions.get("screen");

export default function Search() {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchRecipes = async () => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.meals);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    searchRecipes();
  }, [search]);

  return (
    <View style={{ backgroundColor: "black", width: width, height: height, padding: 10 }}>
      <StatusBar style='light' />
      <TextInput
        style={{
          height: 20,
          marginHorizontal: 15,
          width: "95%",
          padding: 10,
          backgroundColor: "white",
          alignSelf: "center",
          color: "white",
          borderColor: "transparent",
          marginTop: 20,
        }}
        mode="outlined"
        textColor='white'
        outlineStyle={{ borderRadius: 50, borderColor: "transparent" }}
        theme={{ colors: { text: "white", primary: "#B1B3B3" } }}
        placeholder='Search saved Recipes'
        left={<TextInput.Icon icon={"magnify"} color={"grey"} style={{ paddingTop: 17, alignSelf: "center", opacity: 0.5 }} />}
      />

      <Text style={{ color: "white", fontSize: 24, fontWeight: 500, marginHorizontal: 15, paddingTop: 30 }}>All Categories</Text>

      <View>
        {searchResults && (
          <Foryou searchResults={searchResults} />
        )}
      </View>

    </View>
  )
}