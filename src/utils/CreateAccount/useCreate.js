import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage} from 'react-native-flash-message';

const useCreate = (values, navigation, setLoading) => {
  setLoading(true);
  auth()
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(() => {
      showMessage({
        message: 'User account created & signed in!',
        type: 'success',
      });
      navigation.navigate('HomeScreen');
      database().ref('users/').push({
        name: values.firstName,
        surname: values.lastName,
        email: values.email,
      });
      setLoading(false);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        showMessage({
          message: 'That email address is already in use!',
          type: 'danger',
        });
      }
      if (error.code === 'auth/invalid-email') {
        showMessage({
          message: 'That email address is invalid!',
          type: 'danger',
        });
      }
      setLoading(false);
    });
};

export default useCreate;
