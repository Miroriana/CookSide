import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Dimensions, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons'
import Popular from '../Components/Popular'
import Foryou from '../Components/Foryou'
import Categories from '../Components/Categories'
import { SliderBox } from 'react-native-image-slider-box';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home({ navigation }) {

    const [horiRecipes, setHoriRecipes] = useState([]);
    const [vertiRecipes, setVertiRecipes] = useState([]);
    const [breakRecipes, setBreakRecipes] = useState([]);
    const [showAllCategories, setShowAllCategories] = useState(false);

    useEffect(() => {
        const fetchRecipes = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=v';
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
            const url = 'https://themealdb.com/api/json/v1/1/categories.php';
            try {
                const response = await fetch(url);
                const data = await response.json();
                setBreakRecipes(data.categories);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipes3();

        const fetchRecipes2 = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
            try {
                const response = await fetch(url);
                const data = await response.json();
                setVertiRecipes(data.meals);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipes2();
    }, []);

    const recipeImages = horiRecipes.map(recipe => ({
        image: recipe.strMealThumb,
        meal: recipe.strMeal,

    }));


    const handleSeeAllCategories = () => {
        setShowAllCategories(true);
    };

    const handleCategoryPress = async (categoryId) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setVertiRecipes(data.meals);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={{ width: width, height: height, padding: 20, backgroundColor: 'black' }}>
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 500, color: 'white', paddingTop: 20 }}>Cookside</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="notifications-none" size={23} color="white" style={{ marginTop: 20, }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, backgroundColor: '#F4F4F4', borderRadius: 10, padding: 10 }}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <MaterialIcons name="search" size={20} color="grey" style={{ marginTop: 4 }} />
                        <TextInput placeholder='Search Your Recipes' />
                    </View>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="tune-variant" size={20} color="grey" style={{ marginTop: 4 }} />
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', padding: 10, marginTop: 20 }}>Popular Recipes</Text>

                <View style={{ width: width }}>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: 'black', position: 'absolute', bottom: 0, left: 10 }}>Hori</Text>
                    <SliderBox
                        images={recipeImages.map(recipe => recipe.image)}
                        sliderBoxHeight={150} dotColor="orange" inactiveDotColor="white" autoplay autoplayInterval={3000}
                        sliderBoxImageStyle={{ borderRadius: 50, width: 250, height: 150 }}
                        onSliderBoxPressed={(index) => console.warn(`Recipe ${index + 1} pressed`)}
                        onCurrentImagePressed={(index) => console.warn(`Recipe ${index + 1} pressed`)}
                    />
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 500, color: 'white' }}>Categories</Text>
                    <TouchableOpacity onPress={handleSeeAllCategories}>
                        <Text style={{ color: 'orange', fontWeight: 500 }}>See All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {showAllCategories
                        ? breakRecipes.map(category => (
                            <TouchableOpacity key={category.idCategory} onPress={() => handleCategoryPress(category.strCategory)}>
                                <View>
                                    <Categories image={category.strCategoryThumb} category={category.strCategory} />
                                </View>
                            </TouchableOpacity>
                        ))
                        : breakRecipes.slice(0, 4).map(category => (
                            <TouchableOpacity key={category.idCategory} onPress={() => handleCategoryPress(category.strCategory)}>
                                <View>
                                    <Categories image={category.strCategoryThumb} category={category.strCategory} />
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', padding: 10, marginTop: 15 }}>Recipes For You</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {vertiRecipes.map(recipe => (
                            <View key={recipe.idMeal} style={{ width: '50%' }}>
                                <Foryou image={recipe.strMealThumb} category={recipe.strCategory} tags={recipe.strTags} onpress={() => navigation.navigate('More')} />
                            </View>
                        ))}
                    </View>
                </ScrollView>

            </ScrollView>
        </View>

    )
}
