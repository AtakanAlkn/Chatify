import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './RegisterScreenStyle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Formik} from 'formik';
import {RegisterValidationSchema} from '../../utils/Validation/useValidation';
import useCreate from '../../utils/CreateAccount/useCreate';

const RegisterScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const onCreateAccount = values => {
    useCreate(values, navigation, setLoading);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollContainer}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              rePassword: '',
            }}
            onSubmit={onCreateAccount}
            validationSchema={RegisterValidationSchema}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <>
                <View>
                  <Text style={styles.header}>Create Account</Text>
                  <View style={styles.info}>
                    <View style={{flex: 1, marginRight: 20}}>
                      <Input
                        placeholder="First Name"
                        header="First Name"
                        value={values.firstName}
                        onChangeText={handleChange('firstName')}
                        error={errors.firstName}
                        touched={touched.firstName}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Input
                        placeholder="Last Name"
                        header="Last Name"
                        value={values.lastName}
                        onChangeText={handleChange('lastName')}
                        error={errors.lastName}
                        touched={touched.lastName}
                      />
                    </View>
                  </View>
                  <Input
                    placeholder="Enter your email"
                    header="E-mail"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    autoCapitalize="none"
                    error={errors.email}
                    touched={touched.email}
                  />
                  <Input
                    placeholder="Enter your password"
                    header="Password"
                    iconName="eye-off"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    error={errors.password}
                    touched={touched.password}
                  />
                  <Input
                    placeholder="Enter your password"
                    header="Confirm Password"
                    iconName="eye-off"
                    value={values.rePassword}
                    onChangeText={handleChange('rePassword')}
                    autoCapitalize="none"
                    error={errors.rePassword}
                    touched={touched.rePassword}
                  />
                </View>
                <View style={styles.bottom}>
                  <Button
                    title="Create Account"
                    onPress={handleSubmit}
                    loading={loading}
                  />
                  <Text style={styles.bottomText}>
                    By continuing, you agree to our{' '}
                    <Text style={{color: '#3C9AFB'}}>Terms of Service</Text> and{' '}
                    <Text style={{color: '#3C9AFB'}}>Privacy Policy.</Text>
                  </Text>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
