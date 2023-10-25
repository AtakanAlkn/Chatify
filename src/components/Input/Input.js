import React, {useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import styles from './InputStyle';
import Icon from 'react-native-vector-icons/Feather';

const Input = ({
  header,
  placeholder,
  iconName,
  onChangeText,
  value,
  autoCapitalize,
  error,
  touched,
}) => {
  const [show, setShow] = useState(iconName ? true : false);
  return (
    <View
      style={[
        styles.container,
        error && touched ? {borderColor: 'red'} : null,
      ]}>
      <Text style={styles.header}>{header}</Text>
      <View
        style={[
          styles.inputContainer,
          error && touched ? {borderColor: 'red', borderWidth: 1.2} : null,
        ]}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize={autoCapitalize}
          secureTextEntry={show}
        />
        <TouchableWithoutFeedback onPress={() => setShow(!show)}>
          <Icon name={iconName} size={24} />
        </TouchableWithoutFeedback>
      </View>
      {error && touched ? (
        <Text style={{fontSize: 10, color: 'red'}}>{error}</Text>
      ) : null}
    </View>
  );
};

export default Input;
