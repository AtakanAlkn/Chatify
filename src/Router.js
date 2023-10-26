import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen/LogIn';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import OnBoardingScreen from './screens/OnBoardingScreen/OnBoardingScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import TabBar from './navigator/TabBar/TabBar';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
