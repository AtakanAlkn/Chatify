import React from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import styles from './InputStyle';
import Icon from 'react-native-vector-icons/Feather';

const Input = ({header, placeholder, iconName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder={placeholder} />
        <TouchableWithoutFeedback onPress={() => null}>
          <Icon name={iconName} size={16} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Input;
