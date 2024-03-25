import React, { useState, useEffect } from 'react'
import { Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import Categories from '../Components/Categories';
const { width, height } = Dimensions.get("screen");
import ForMore from '../Components/ForMore';

export default function Search({navigation}) {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchRecipes = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
   
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
          color: "black",
          borderColor: "transparent",
          marginTop: 30,

        }}
        mode="outlined"
        textColor='black'
        outlineStyle={{ borderRadius: 50, borderColor: "transparent" }}
        theme={{ colors: { text: "white", primary: "#B1B3B3" } }}
        placeholder='Search Saved Recipes'
        onChangeText={text => setSearch(text)}
        left={<TextInput.Icon icon={"magnify"} color={"grey"} style={{ paddingTop: 17, alignSelf: "center", opacity: 0.5 }} />}
      />

      <Text style={{ color: "white", fontSize: 24, fontWeight: 500, marginHorizontal: 15, paddingTop: 20, paddingBottom: 10 }}>All Categories</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {searchResults.map(recipe => (
                            <View key={recipe.idMeal} style={{ width: '50%', }}>
                                <ForMore image={recipe.strMealThumb} meal={recipe.strMeal} tags={recipe.strArea} onpress={() => navigation.navigate('More')} />
                            </View>
                        ))}
                    </View>
                </ScrollView> 

{/* <Text style={{ color: "white", fontSize: 24, fontWeight: 500, marginHorizontal: 20, paddingTop: 20, paddingBottom: 10 }}>All Categories</Text>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10,  }}>
          {searchResults.map(recipe => (
            <View key={recipe.idMeal}>
              <Categories image={recipe.strCategoryThumb} category={recipe.strCategory} />
              <Text style={{ color: 'white' }}></Text>
            </View>
          ))}
        </View>
      </ScrollView> */}


    </View>
  )
}