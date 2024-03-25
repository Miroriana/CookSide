
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './cookside/splash';
import GetStarted from './cookside/getStarted';
import SignUp from './cookside/signup';
import SignIn from './cookside/signIn';
import Subscribe from './cookside/subscribe';
import Navigation from './Navigation';
import Home from './bottomNav/Home'
import NotiScreen from './Components/NotiScreen';
import Details from './bottomNav/Details'
import Search from './bottomNav/Search'

export default function App() {
  return (

    <Navigation />
    // <Home />
    // <NotiScreen />
    // <Details />
    // <Search />

  );
}



