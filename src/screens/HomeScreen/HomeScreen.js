import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './HomeScreenStyle';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import CreateRoomModal from '../../components/Modal/CreateRoomModal/CreateRoomModal';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';
import RoomCard from './RoomCardComponent/RoomCard';
import useParseRoomData from '../../utils/ParseData/useParseRoomData';
import getFullName from '../../utils/FullName/getFullName';

const HomeScreen = ({navigation}) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [roomList, setRoomList] = React.useState([]);

  const onToggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleCreateRoom = async roomName => {
    setLoading(true);
    try {
      const fullName = await getFullName();
      await database().ref('rooms/').push({
        name: roomName,
        creator: fullName,
        date: new Date().toISOString(),
      });
      showMessage({
        message: 'Room created successfully',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: error.message || 'Something went wrong',
        type: 'danger',
      });
    } finally {
      setVisibleModal(false);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    database()
      .ref('/rooms')
      .on('value', snapshot => {
        const val = snapshot.val();
        const parserdData = useParseRoomData(val || {});
        setRoomList(parserdData);
      });
  }, []);

  const onMessage = item => {
    navigation.navigate('MessageScreen', {data: item});
  };

  const renderRoomCard = ({item}) => {
    return <RoomCard item={item} onPress={() => onMessage(item)} />;
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
