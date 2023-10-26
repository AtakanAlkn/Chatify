import React from 'react';
import {View, Text} from 'react-native';
import styles from './ProfileStyle';
import Button from '../../components/Button/Button';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const [fullName, setFullName] = React.useState('');
  database()
    .ref('users/')
    .orderByChild('email')
    .equalTo(auth().currentUser.email)
    .once('value')
    .then(snapshot => {
      const data = snapshot.val();
      if (data) {
        const values = Object.values(data);
        const info = values[0].name + ' ' + values[0].surname;
        setFullName(info);
      }
    });

  const onSignOut = () => {
    auth().signOut();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{fullName}</Text>
      <View style={styles.buttonView}>
        <Button title="Change Password" />
      </View>
      <View style={styles.buttonView}>
        <Button title="Log Out" onPress={onSignOut} />
      </View>
    </View>
  );
};

export default ProfileScreen;
