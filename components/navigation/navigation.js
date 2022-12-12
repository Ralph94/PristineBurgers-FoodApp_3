import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import PanCakeScreen from '../screens/PanCakeScreen';
import CheckOut from '../screens/CheckOut';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="splashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PanCakeScreen' component={PanCakeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CheckOut" component={CheckOut} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
};

export default Navigation;
