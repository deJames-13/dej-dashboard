import * as yup from 'yup';

export const postValidation = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('*Required'),
});
