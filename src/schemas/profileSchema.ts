import * as yup from 'yup';

const emailRegExp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const validImageTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/bmp', 'image/webp'];

export const profileSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().matches(emailRegExp, 'Enter a valid Email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Phone number must be in the format +380XXXXXXXXX')
    .notRequired(),
  avatar: yup
    .mixed<FileList>()
    .test('fileSize', 'File too large', (value) => {
      if (value && value.length > 0) {
        const file = value[0];
        return file.size <= 5 * 1024 * 1024; // Check file size (e.g., 5MB)
      }
      return true;
    })
    .test('fileFormat', 'Unsupported format', (value) => {
      if (value && value.length > 0) {
        const file = value[0];
        return validImageTypes.includes(file.type); // Check file format
      }
      return true;
    })
    .notRequired(),
});
