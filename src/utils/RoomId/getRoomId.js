import database from '@react-native-firebase/database';

const getRoomId = async name => {
  try {
    const snapshot = await database()
      .ref('rooms/')
      .orderByChild('name')
      .equalTo(name)
      .once('value');
    const data = snapshot.val();
    if (data) {
      return Object.keys(data);
    } else {
      throw new Error('RoomId not found');
    }
  } catch (error) {
    throw error;
  }
};

export default getRoomId;
