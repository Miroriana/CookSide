import React, { useState, useEffect } from 'react'
import { View, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesome, AntDesign } from 'react-native-vector-icons'
import Popular from '../Components/Popular';
import { StatusBar } from 'expo-status-bar';
import Detail from '../Components/Detail';
import Rounded from '../Components/Rounded';
import { SliderBox } from 'react-native-image-slider-box';

const { width, height } = Dimensions.get("screen");

export default function Details({ route, navigation, }) {

  const { recipe } = route.params;
  console.log(recipe);

  const [horiRecipes, setHoriRecipes] = useState([]);
  const [breakRecipes, setBreakRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=g';
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
      const url = `https://themealdb.com/api/json/v1/1/categories.php`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBreakRecipes(data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes3();
  }, []);

  const recipeImages = horiRecipes.map(recipe => ({
    image: recipe.strMealThumb,
    meal: recipe.strMeal,
  }));

  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={{ width: width, height: height, padding: 20, backgroundColor: 'black' }}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <FontAwesome name='arrow-circle-o-left' size={23} color="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Detail Recipes</Text>
          <TouchableOpacity onPress={handleBookmarkToggle}>
            <FontAwesome name={isBookmarked ? "bookmark" : "bookmark"} size={20} color={isBookmarked ? "orange" : "white"} />
          </TouchableOpacity>
        </View>

        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {horiRecipes.map(recipe => (
            <View key={recipe.idMeal} style={{ marginRight: 15, paddingTop: 10 }}>
              <Detail image={recipe.strMealThumb} meal={recipe.strMeal} />
            </View>
          ))}
        </ScrollView> */}


        <View style={{ width: width }}>
          <SliderBox
            images={recipeImages.map(recipe => recipe.image)}
            sliderBoxHeight={200} dotColor="orange" inactiveDotColor="white" autoplay autoplayInterval={3000}
            sliderBoxImageStyle={{ borderRadius: 50, width: 250, height: 150 }}
            onSliderBoxPressed={(index) => console.warn(`Recipe ${index + 1} pressed`)}
            onCurrentImagePressed={(index) => console.warn(`Recipe ${index + 1} pressed`)}
          />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>{recipeImages.length > 0 ? recipeImages[0].meal : ''}</Text>
          <Text style={{ color: 'white', fontWeight: '400', fontSize: 16 }}>By Emma Hastings</Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Ingredients</Text>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>14 items</Text>
        </View>


        <ScrollView >
          {breakRecipes.map(category => (
            <View key={category.idMeal} style={{ paddingTop: 15 }}>
              <Rounded image={category.strCategoryThumb} category={category.strCategory} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <View>
        <TouchableOpacity style={{ position: 'absolute', bottom: 30, flexDirection: 'row', gap: 10, backgroundColor: 'orange', borderRadius: 20, width: 340, padding: 15, borderTopColor: 'white', }}>
          <AntDesign name='play' size={15} color="white" style={{ marginTop: 4, marginLeft: 100 }} />
          <Text style={{ color: 'white', fontWeight: '400', fontSize: 18, }}>Watch Video</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}