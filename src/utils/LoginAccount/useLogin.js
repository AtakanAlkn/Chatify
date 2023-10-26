import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const useLogin = (values, navigation, setLoading) => {
  setLoading(true);
  auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(() => {
      navigation.navigate('HomeScreen');
      setLoading(false);
    })
    .catch(error => {
      if (error.code === 'auth/invalid-login') {
        showMessage({
          message: 'Invalid login',
          type: 'danger',
        });
      }
      if (error.code === 'auth/invalid-email') {
        showMessage({
          message: 'Invalid email',
          type: 'danger',
        });
      }
      setLoading(false);
    });
};

export default useLogin;
