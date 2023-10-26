import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './LogInScreenStyle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Formik} from 'formik';
import {LoginValidationSchema} from '../../utils/Validation/useValidation';
import useLogin from '../../utils/LoginAccount/useLogin';

const LogInScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const onLogin = values => {
    setLoading(true);
    useLogin(values, navigation, setLoading);
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onLogin}
        validationSchema={LoginValidationSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <View>
              <Text style={styles.header}>Login</Text>
              <Input
                placeholder="Enter your email"
                header="E-mail"
                value={values.email}
                onChangeText={handleChange('email')}
                error={errors.email}
                touched={touched.email}
              />
              <Input
                placeholder="Enter your password"
                header="Password"
                iconName="eye-off"
                value={values.password}
                onChangeText={handleChange('password')}
                error={errors.password}
                touched={touched.password}
              />
              <Text style={styles.forgot}>Forgot Password?</Text>
              <Button title="Login" onPress={handleSubmit} loading={loading} />
            </View>
            <View style={styles.bottom}>
              <Text style={{textAlign: 'center', marginBottom: 20}}>
                or login with
              </Text>
              <Button
                title="Login with Google"
                theme="secondary"
                onPress={() => navigation.navigate('TabBar')}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LogInScreen;
