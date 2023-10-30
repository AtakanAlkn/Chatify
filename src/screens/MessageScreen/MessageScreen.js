import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './MessageScreenStyle';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import MessageModal from '../../components/Modal/MessageModal/MessageModal';
import database from '@react-native-firebase/database';
import getFullName from '../../utils/FullName/getFullName';
import getRoomId from '../../utils/RoomId/getRoomId';
import useParseMessageData from '../../utils/ParseData/useParseMessageData';
import MessageCard from './MessageCardComponent/MessageCard';

const MessageScreen = ({route}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const {name} = route.params.data;
  const name2 = name;

  const onToggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleSendMessage = async message => {
    setLoading(true);
    try {
      const fullName = await getFullName();
      const roomId = await getRoomId(name2);
      await database().ref(`rooms/${roomId}/messages`).push({
        sender: fullName,
        message: message,
        date: new Date().toISOString(),
      });
    } catch (error) {
      showMessage({
        message: error.message || 'Something went wrong',
        type: 'danger',
      });
    } finally {
      setVisibleModal(!visibleModal);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomId = await getRoomId(name2);
        database()
          .ref(`rooms/${roomId}/messages`)
          .on('value', snapshot => {
            const val = snapshot.val();
            const parserdData = useParseMessageData(val || {});
            setMessageList(parserdData);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderMessageCard = ({item}) => {
    return <MessageCard data={item} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <FlatList
        data={messageList}
        keyExtractor={item => item.id}
        renderItem={renderMessageCard}
        showsVerticalScrollIndicator={false}
      />
      <MessageModal
        onClose={onToggleModal}
        isVisible={visibleModal}
        handleSendMessage={handleSendMessage}
        loadingButton={loading}
      />
      <FloatingButton onPress={onToggleModal} />
    </View>
  );
};

export default MessageScreen;
