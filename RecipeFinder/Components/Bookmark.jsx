import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { mealData } from '../index';
import Animated, { FadeInDown } from 'react-native-reanimated';

export const BookmarkComponent = () => {
const {height, width} = Dimensions.get('screen')
    return (
        <View style={{ height:height}}>
            <Text style={{ color: "orange" }}>Recipe</Text>
            
                <MasonryList
                    data={mealData}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
                    // refreshing={isLoadingNext}
                    // onRefresh={() => refetch({ first: ITEM_CNT })}
                    onEndReachedThreshold={0.1}
                // onEndReached={() => loadNext(ITEM_CNT)}
                />
           



        </View>
    )
}
const RecipeCard = ({ item, index }) => {
let isEven= index%2==0;

    return (
        <Animated.View entering={FadeInDown.delay(index+100).duration(600).springify().damping(12)}>
            <Pressable
                style={{ width: "100%", justifyContent: "center", paddingHorizontal:10, paddingVertical:5 }}>
                <Image source={{ uri: item.image }}
                    style={{ width: "100%", height:index%3===0?250: 190, borderRadius:10, resizeMode:"stretch"}} />
                    <Text style={{color:"white"}}>{ item.name}</Text>
            </Pressable>
        </Animated.View>
    )
}