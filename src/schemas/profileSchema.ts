import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Phone number must be in the format +380XXXXXXXXX')
    .required('Phone number is required'),
});
