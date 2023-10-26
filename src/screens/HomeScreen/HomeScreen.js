import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './HomeScreenStyle';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import CreateRoomModal from '../../components/Modal/CreateRoomModal/CreateRoomModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import RoomCard from './RoomCardComponent/RoomCard';
import useParseRoomData from '../../utils/ParseData/useParseRoomData';

const HomeScreen = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [roomList, setRoomList] = React.useState([]);

  const onToggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleCreateRoom = roomName => {
    setLoading(true);
    database()
      .ref('users/')
      .orderByChild('email')
      .equalTo(auth().currentUser.email)
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          const values = Object.values(data);
          const fullName = values[0].name + ' ' + values[0].surname;
          database()
            .ref('rooms/')
            .push({
              name: roomName,
              creator: fullName,
              date: new Date().toISOString(),
            })
            .then(
              () =>
                showMessage({
                  message: 'Room created successfully',
                  type: 'success',
                }),
              setVisibleModal(!visibleModal),
              setLoading(false),
            )
            .catch(
              error =>
                showMessage({
                  message: error.code,
                  type: 'danger',
                }),
              setVisibleModal(!visibleModal),
              setLoading(false),
            );
        }
      });
  };

  React.useEffect(() => {
    database()
      .ref('/rooms')
      .on('value', snapshot => {
        const val = snapshot.val();
        if (val) {
          const parserdData = useParseRoomData(val);
          setRoomList(parserdData);
        }
      });
  }, []);

  const renderRoomCard = ({item}) => {
    return <RoomCard item={item} onPress={() => console.log(item.name)} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rooms</Text>
      <FlatList
        data={roomList}
        renderItem={renderRoomCard}
        keyExtractor={item => item.id}
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
