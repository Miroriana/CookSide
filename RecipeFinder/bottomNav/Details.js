import React, { useState, useEffect } from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome } from 'react-native-vector-icons'
import Popular from '../Components/Popular';
import { StatusBar } from 'expo-status-bar';
import Detail from '../Components/Detail';
import Categories from '../Components/Categories';

const { width, height } = Dimensions.get("screen");

export default function Details({navigation}) {

  const [horiRecipes, setHoriRecipes] = useState([]);
  const [breakRecipes, setBreakRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setHoriRecipes(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();

    const fetchRecipes3 = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBreakRecipes(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes3();
  }, []);

  return (
    <View style={{ width: width, height: height, padding: 20, backgroundColor: 'black' }}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <FontAwesome name='arrow-circle-o-left' size={23} color="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Detail Recipes</Text>
          <FontAwesome name='bookmark' size={20} color="white" />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {horiRecipes.map(recipe => (
            <View key={recipe.idMeal} style={{ marginRight: 15, paddingTop: 10 }}>
              <Detail image={recipe.strMealThumb} meal={recipe.strMeal} />
            </View>
          ))}
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10,  }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'  }}>Ingredients</Text>
          <Text style={{ color: 'white', fontWeight:'bold' }}>8 items</Text>
        </View>

        
          <ScrollView >
            {breakRecipes.map(recipe => (
              <View key={recipe.idMeal} style={{paddingTop: 20}}>
                <Categories image={recipe.strMealThumb} meal={recipe.strMeal} />
              </View>
            ))}
          </ScrollView>
         
       
      </ScrollView>
    </View>
  )
}