import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Subscribe() {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View style={{ marginTop: 30, display: "flex", flexDirection: "row", gap: 100 }}>
                <Ionicons name='arrow-back' style={{ fontSize: 20, backgroundColor: "whitesmoke", width: 32, textAlign: "center", marginLeft: 20, borderRadius: 25, padding: 3, borderWidth: 0.4, borderColor: "gray" }}></Ionicons>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>Subscribe</Text>
            </View>
            <View style={{ backgroundColor: "#EB9800", width: "89%", height: "45%", marginLeft: 20, marginTop: 22, borderRadius: 8 }}>
                <View style={{ marginLeft: 18, marginTop: 8 }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: '500' }}>Monthly</Text>
                    <Text style={{ color: "white", marginTop: 5, fontWeight: '300' }}>Pay per month, will be billed every month</Text>
                    <Text style={{ color: "white", fontSize: 23, fontWeight: '600', marginTop: 5 }}>$5.99/month</Text>
                </View>
                <View style={{ width: "87%", marginLeft: 38 }}>
                    <Text style={{ marginTop: 8, color: "white" }}>Get full access to all premium or exclusive recipes.</Text>
                    <Text style={{ marginTop: 4, color: "white" }}>Find and save recipes effortiessly</Text>
                    <Text style={{ marginTop: 4, color: "white" }}>A wider variety of recipes to explore including recipes from specific categories or cuisines</Text>
                    <Text style={{ marginTop: 4, color: "white" }}>Custom notification about new recipes.cooking tips or relevant app updates.</Text>
                    <Text style={{ marginTop: 4, color: "white" }}>Favorite recipe storage or bookmark feature, which allows customers to save and manage the recipes they like</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "whitesmoke", width: "89%", height: "30%", marginLeft: 20, marginTop: 22, borderRadius: 8 }}>
                <View style={{ marginLeft: 18, marginTop: 8 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Annual</Text>
                    <Text style={{ marginTop: 5, fontWeight: '300' }}>Pay per year, will be billed every year</Text>
                    <Text style={{ color: "#EB9800", fontSize: 23, fontWeight: '600', marginTop: 5 }}>$49.99/year</Text>
                </View>
                <ScrollView vertical>
                    <View style={{ width: "87%", marginLeft: 18 }}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <AntDesign name='check' style={{ color: "#EB9800", fontSize: 18, marginTop: 10 }}></AntDesign>
                            <Text style={{ marginTop: 8, }}>Get full access to all premium or exclusive recipes.</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <AntDesign name='check' style={{ color: "#EB9800", fontSize: 18, marginTop: 10 }}></AntDesign>
                            <Text style={{ marginTop: 8, }}>Find and save recipes effortiessly</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <AntDesign name='check' style={{ color: "#EB9800", fontSize: 18, marginTop: 10 }}></AntDesign>
                            <Text style={{ marginTop: 8, }}>A wider variety of recipes to explore including recipes from specific categories or cuisines</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <AntDesign name='check' style={{ color: "#EB9800", fontSize: 18, marginTop: 10 }}></AntDesign>
                            <Text style={{ marginTop: 8, }}>Custom notification about new recipes.cooking tips or relevant app updates.</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <AntDesign name='check' style={{ color: "#EB9800", fontSize: 18, marginTop: 10 }}></AntDesign>
                            <Text style={{ marginTop: 8 }}>Favorite recipe storage or bookmark feature, which allows customers to save and manage the recipes they like</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity style={{ backgroundColor: "#EB9800", width: "91%", display: "flex", justifyContent: "center", alignSelf: "center", borderRadius: 30, marginTop: 17}}>
                <Text style={{ color: "white", padding: 12, textAlign: "center", fontWeight: '400' }}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    )

}
