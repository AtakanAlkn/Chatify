import React from 'react';
import {View, Text} from 'react-native';
import styles from './OnBoardingScreenStyle';
import Button from '../../components/Button/Button';
import LottieView from 'lottie-react-native';

const OnBoardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/Animations/helloAnimation.json')}
        style={{flex: 2}}
        autoPlay
      />
      <View style={{flex: 1}}>
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('RegisterScreen')}
        />
        <View style={{height: 20}}></View>
        <Button
          title="Login"
          theme="tertiary"
          onPress={() => navigation.navigate('LogInScreen')}
        />
      </View>
    </View>
  );
};
export default OnBoardingScreen;
