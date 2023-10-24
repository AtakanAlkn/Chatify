import React from 'react';
import {View, Text} from 'react-native';
import styles from './LogInScreenStyle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Login</Text>
        <Input placeholder="Enter your email" header="E-mail" />
        <Input
          placeholder="Enter your password"
          header="Password"
          iconName="eye-off"
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Button title="Login" />
      </View>
      <View style={styles.bottom}>
        <Text style={{textAlign: 'center', marginBottom: 20}}>
          or login with
        </Text>
        <Button title="Login with Google" theme="secondary" />
      </View>
    </View>
  );
};

export default LogInScreen;
