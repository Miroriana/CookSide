import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function GetStarted({navigation}) {
    return (
        <View style={{ width: "100%", height: "100%"}}>

            <View style={{ marginTop: 90, flex: 1, alignItems: "center",fontWeight:'600' }}>
                <Text style={{ color: "#EB9800", fontSize:20,marginBottom:18}}>CookSide</Text>
                <Image source={require("../assets/image2.png")} />
                <Text style={{fontSize:20, width:"90%",fontWeight:'600',marginTop:13}}>A wide and varied collection of recipes for you</Text>
                <Text style={{width:"90%", fontWeight:'100',marginTop:13}}>Enjoy a more fun and creative cooking experience with CookSide. Explore a variety of dishes from various parts of the world.</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('signIn')} style={{backgroundColor:"#EB9800",width:320,marginBottom:100,display:"flex",justifyContent:"center",alignSelf:"center",borderRadius:30}}>
                <Text style={{color:"white",padding:12,textAlign:"center",fontWeight:'400'}}>Tap to get started</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )

}