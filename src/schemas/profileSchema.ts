import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Phone number must be in the format +380XXXXXXXXX')
    .required('Phone number is required'),
  photoPath: yup.string().optional(),
  photoFile: yup
    .mixed()
    .test('fileSize', 'File too large', (value) => {
      if (!value || !(value instanceof FileList) || value.length === 0) return true;
      return value[0].size <= 2000000;
    })
    .test('fileType', 'Unsupported file format', (value) => {
      if (!value || !(value instanceof FileList) || value.length === 0) return true;
      return ['image/jpeg', 'image/png', 'image/gif'].includes(value[0].type);
    }),
});
