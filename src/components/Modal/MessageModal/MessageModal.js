import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './MessageModalStyle';
import Modal from 'react-native-modal';
import Button from '../../Button/Button';

const MessageModal = ({
  onClose,
  isVisible,
  handleSendMessage,
  loadingButton,
}) => {
  const [empty, setEmpty] = useState(false);
  const [message, setMessage] = useState('');
  const onSendMessage = () => {
    if (message) {
      handleSendMessage(message);
      setTimeout(() => setMessage(''), 1000);
    }
  };

  useEffect(() => {
    if (message) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [message]);
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter the room name..."
            onChangeText={setMessage}
            value={message}
            maxLength={25}
          />
        </View>
        {empty && (
          <Text style={styles.text}>Room name cannot be left blank</Text>
        )}
        <Button
          title="Send Message"
          onPress={onSendMessage}
          loading={loadingButton}
        />
      </View>
    </Modal>
  );
};

export default MessageModal;
