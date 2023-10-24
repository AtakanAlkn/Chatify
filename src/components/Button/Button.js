import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './ButtonStyle';
import Google from '../../assets/Icons/Google';

const Button = ({title, theme = 'primary', onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles[theme].container} onPress={onPress}>
        {theme === 'secondary' ? <Google /> : null}
        <Text style={styles[theme].title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
