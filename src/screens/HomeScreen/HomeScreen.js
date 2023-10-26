import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './HomeScreenStyle';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import CreateRoomModal from '../../components/Modal/CreateRoomModal/CreateRoomModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import RoomCard from './RoomCardComponent/RoomCard';

const HomeScreen = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [roomList, setRoomList] = React.useState([]);

  const onToggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleCreateRoom = roomName => {
    setLoading(true);
    /*
    //Redux ile üste taşınacak ve düzeltilecek TODO
    const email = auth().currentUser.email;
    database()
      .ref('users/')
      .orderByChild('email')
      .equalTo(email)
      .once('value')
      .then(snapshot => {
        const name = Object.values(snapshot.val())[0].name;
        const surname = Object.values(snapshot.val())[0].surname;
        const fullName = name + surname;
      });
*/
    setVisibleModal(!visibleModal);
    database()
      .ref('rooms/')
      .push({
        name: roomName,
        creator: 'Atakan',
      })
      .then(
        () =>
          showMessage({
            message: 'Room created successfully',
            type: 'success',
          }),

        setLoading(true),
      )
      .catch(
        error =>
          showMessage({
            message: error.code,
            type: 'danger',
          }),
        setLoading(false),
      );
  };

  React.useEffect(() => {
    database()
      .ref('/rooms')
      .on('value', snapshot => {
        setRoomList(Object.values(snapshot.val()).map(room => room.name));
      });
  }, []);

  const renderRoomCard = ({item}) => {
    return <RoomCard title={item} onPress={() => console.log(item)} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rooms</Text>
      <FlatList
        data={roomList}
        renderItem={renderRoomCard}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      <CreateRoomModal
        isVisible={visibleModal}
        onCreateRoom={handleCreateRoom}
        onClose={onToggleModal}
        loadingButton={loading}
      />
      <FloatingButton onPress={onToggleModal} />
    </View>
  );
};

export default HomeScreen;
