import * as yup from 'yup';

const emailRegExp = /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/;
const urlRegExp = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;

export const profileSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().matches(emailRegExp, 'Enter a valid Email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Phone number must be in the format +380XXXXXXXXX')
    .notRequired(),
  avatar: yup.string().matches(urlRegExp, 'Invalid format').notRequired(),
});
