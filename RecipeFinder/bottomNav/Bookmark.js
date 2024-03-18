
import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';
import { BookmarkComponent } from '../Components/Bookmark.jsx';
// const [recentPicture, setRecentPicture] = useState([]);


 export const Bookmark = () => {

        const { height, width } = Dimensions.get('screen');
        const getRecipes= async () => {
        
        }
    //     //fetching pictures in bookmarked
    //     useEffect(() => {
    //         const fetchPictures = async () => {
    //             const url = "www.themealdb.com/api/json/v1/1/search.php?f=a"
    //             try {
    //                 const responses = await fetch(url);
    //                 const data = await responses.json();
    //                 setRecentPicture(data.meals);
    //             } catch (error) {
    //                 console.log("error fetching recent pictures", error);
    //             }
    //         };
    //         fetchPictures();
    //     }, [])

    return (
        <>
            <View style={{ backgroundColor: "#0D131C", height: height }}>
                <Text style={{ color: "white", fontSize: 24, fontWeight: 500, marginHorizontal: 15, paddingTop: 30 }}>Bookmark</Text>
                <View style={{ height: 15 }}></View>

                <TextInput
                    style={{
                        height: 20,
                        width: width - 30,
                        marginHorizontal: 15,
                        padding: 10,
                        backgroundColor: "#151D29",
                        alignSelf: "center",
                        color: "white",
                        borderColor: "transparent",
                    }}
                    mode="outlined"
                    textColor='white'
                    outlineStyle={{ borderRadius: 50, borderColor: "transparent" }}
                    theme={{ colors: { text: "white", primary: "#B1B3B3" } }}
                    placeholder='Search saved Recipes'
                    left={<TextInput.Icon icon={"magnify"} color={"grey"} style={{ paddingTop: 17, alignSelf: "center", opacity: 0.5 }} />}

                />
                <View>
                    <ScrollView>
                        <View style={{ height: 10 }}></View>
                        <View style={{ display: "flex", flexDirection: "row", paddingHorizontal: 15, justifyContent: "space-between" }}>
                            <Text style={{ color: "white" }}>Recently Added</Text>
                            <TouchableOpacity><Text style={{ color: "#EB9800" }}>See all</Text></TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View>
                <BookmarkComponent/>
                </View>
            </View>
            <StatusBar  style='light'></StatusBar>

        </>
    )
}



