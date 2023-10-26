import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './FloatingButtonStyle';
import Icon from 'react-native-vector-icons/Entypo';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="plus" size={30} color="#FFFFFF" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FloatingButton;
