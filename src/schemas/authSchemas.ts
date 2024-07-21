import * as yup from 'yup';

const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const logInSchema = yup.object().shape({
  email: yup.string().matches(emailRegExp, 'Enter a valid Email').required('Email is required'),
  password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
});

export const registrationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .nullable()
    .required('Confirm Password is required'),
});
