import * as yup from 'yup';

const RegisterValidationSchema = yup.object().shape({
  lastName: yup.string().required('Last name is required'),
  firstName: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  rePassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const LoginValidationSchema = yup.object().shape({
  email: yup.string().required('This field cannot be left blank'),
  password: yup.string().required('This field cannot be left blank'),
});

export {RegisterValidationSchema, LoginValidationSchema};
