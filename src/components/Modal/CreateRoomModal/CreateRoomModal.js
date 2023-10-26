import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './CreateRoomModalStyle';
import Modal from 'react-native-modal';
import Button from '../../Button/Button';

const CreateRoomModal = ({isVisible, onClose, onCreateRoom, loadingButton}) => {
  const [roomName, setRoomName] = React.useState('');
  const [empty, setEmpty] = React.useState(false);
  const handleCreateRoom = () => {
    if (roomName) {
      onCreateRoom(roomName);
      setTimeout(() => setRoomName(''), 1000);
    }
  };

  React.useEffect(() => {
    if (roomName) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [roomName]);

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter the room name..."
            onChangeText={setRoomName}
            maxLength={25}
          />
        </View>
        {empty && (
          <Text style={styles.text}>Room name cannot be left blank</Text>
        )}
        <Button
          title="Create"
          onPress={handleCreateRoom}
          loading={loadingButton}
        />
      </View>
    </Modal>
  );
};

export default CreateRoomModal;
