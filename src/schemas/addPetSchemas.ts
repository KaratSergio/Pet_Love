import * as yup from 'yup';

const urlRegExp = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;

export const addPetSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  name: yup.string().required('Name is required'),
  imgURL: yup.string().matches(urlRegExp, 'Invalid format').required('Image URL is required'),
  species: yup.string().required('Species is required'),
  birthday: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid format')
    .required('Birthday is required'),
  sex: yup.string().required('Sex is required'),
});
