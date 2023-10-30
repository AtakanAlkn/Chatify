import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const getFullName = async () => {
  try {
    const snapshot = await database()
      .ref('users/')
      .orderByChild('email')
      .equalTo(auth().currentUser.email)
      .once('value');

    const data = snapshot.val();
    if (data) {
      const values = Object.values(data);
      return values[0].name + ' ' + values[0].surname;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
};

export default getFullName;
