
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './cookside/splash';
import GetStarted from './cookside/getStarted';
import SignUp from './cookside/signup';
import SignIn from './cookside/signIn';
import Subscribe from './cookside/subscribe';
import Navigation from './Navigation';

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      
        <Navigation />

    </View>
  );
}



