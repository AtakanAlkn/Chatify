import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageCardStyle';
import {
  format,
  formatDistance,
  formatRelative,
  parseISO,
  subDays,
} from 'date-fns';

const MessageCard = ({data}) => {
  const date = formatDistance(parseISO(data.date), new Date(), {
    addSuffix: true,
  });
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.sender}>{data.sender}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
        <Text style={styles.message}>{data.message}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
