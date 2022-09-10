import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);

export const editInfoShape = yup.object().shape({
  fullName: yup.string().nullable(),
  email: yup.string().email().required(),
});

export const editPasswordShape = yup.object().shape({
  oldPassword: yup.string().required(),
  password: yup.string().password().required(),
  repeat: yup.string().password().oneOf([yup.ref('password'), null], 'Password and password repeat must match').required(),
});
