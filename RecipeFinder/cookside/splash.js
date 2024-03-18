import { StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';

export default function Splash({navigation}) {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("getStarted")
        },3000);
     }, []);
    
    return (
    <View style={styles.container}>
        <Image source={require("../assets/image1.png")} />
    </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EB9800',
      alignItems: 'center',
      justifyContent: 'center',
    },
})