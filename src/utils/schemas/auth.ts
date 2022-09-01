import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);

export const registrationShape = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().password().required(),
  repeat: yup.string().password().oneOf([yup.ref('password'), null], 'Password and password repeat must match').required(),
});

export const authorizationShape = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
