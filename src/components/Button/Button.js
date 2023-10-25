import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './ButtonStyle';
import Google from '../../assets/Icons/Google';

const Button = ({title, theme = 'primary', onPress, loading}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles[theme].container}
        onPress={onPress}
        disabled={loading}>
        {theme === 'secondary' ? <Google /> : null}
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles[theme].title}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
