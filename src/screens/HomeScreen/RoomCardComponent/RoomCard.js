import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './RoomCardStyle';

const RoomCard = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
