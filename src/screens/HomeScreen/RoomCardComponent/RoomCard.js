import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './RoomCardStyle';

const RoomCard = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
