import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  userId: yup
    .number()
    .typeError('id must be a number')
    .required('id is required')
    .positive('id must be a positive number')
    .integer('id must be an integer'),
  todo: yup.string().required('This field is required'),
  completed: yup.boolean().required('This field is required').nonNullable('This field is required'),
});
