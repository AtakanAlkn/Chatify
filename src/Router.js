import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen/LogIn';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import OnBoardingScreen from './screens/OnBoardingScreen/OnBoardingScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MessageScreen from './screens/MessageScreen/MessageScreen';
import TabBar from './navigator/TabBar/TabBar';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [userSessions, setUserSession] = React.useState(false);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(currentUser => {
      setUserSession(!!currentUser);
    });
    return () => subscriber();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userSessions ? (
          <Stack.Screen name="TabBar" component={TabBar} />
        ) : (
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        )}
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
