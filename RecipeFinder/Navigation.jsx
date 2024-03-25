import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons';
import Home from './bottomNav/Home';
import Search from './bottomNav/Search';
import { Bookmark } from './bottomNav/Bookmark';
import Profile from './bottomNav/Profile';
import Details from './bottomNav/Details'
import SignIn from './cookside/signIn';
import SignUp from './cookside/signup';
import GetStarted from './cookside/getStarted';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'search') {
            iconName = 'search';
          } else if (route.name === 'bookmark') {
            iconName = 'bookmark';
          } else if (route.name === 'profile') {
            iconName = 'user';
          }
          return <Feather name={iconName} style={{ fontSize: 20, color: focused ? '#D9BE52' : '#CACCCE' }} />;
        },
        tabBarStyle: {
          backgroundColor: '#1F2123',
          borderTopColor: '#1F2123',
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Tabs.Screen name="search" component={Search} options={{ headerShown: false }} />
      <Tabs.Screen name="bookmark" component={Bookmark} options={{ headerShown: false }} />
      <Tabs.Screen name="profile" component={Profile} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='getstarted'>

        <Stack.Screen name="getstarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="More" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="signIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="signUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}