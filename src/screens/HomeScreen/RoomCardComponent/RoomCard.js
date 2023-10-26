import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './RoomCardStyle';
import {formatDistance, parseISO} from 'date-fns';

const RoomCard = ({item, onPress}) => {
  const date = formatDistance(parseISO(item.date), new Date(), {
    addSuffix: true,
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
