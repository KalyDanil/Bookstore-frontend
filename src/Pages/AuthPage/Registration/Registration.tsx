import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import { registrationRequest } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { registrationShape } from '../../../utils/schemas/auth';
import { RegistrationForm } from './Registration.styled';

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const emailErr = (user.emailErr).map((item, index) => {
    return (<span className="emailErr" key={index}>{item}</span>);
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeat: '',
        }}
        validationSchema={registrationShape}
        onSubmit={(values) => {
          const currentUser = {
            email: values.email,
            password: values.password,
          };
          dispatch(registrationRequest(currentUser));
        }}
      >
        {({ handleChange, handleSubmit, errors, values, isSubmitting }) => (
        // eslint-disable-next-line
        <RegistrationForm onSubmit={handleSubmit} emailIsWrong={user.emailIsWrong} passwordValidation={errors.password} emailValidation={errors.email} passwordRepeatValidation={errors.repeat}>
          <h1 className="registration__header">Sing Up</h1>
          <input className="registration__input registration__email" name="email" type="text" placeholder="Email" onChange={handleChange} value={values.email} />
          <span>Enter your email</span>
          <ErrorMessage name="email" className="emailErr" component="div" />
          {emailErr}
          <input className="registration__input registration__password" name="password" type="password" placeholder="Password" autoComplete="false" onChange={handleChange} value={values.password} />
          <span>Enter your password</span>
          <ErrorMessage name="password" className="passwordErr" component="div" />
          <input className="registration__input registration__passwordRepeat" name="repeat" type="password" placeholder="Password repeat" autoComplete="false" onChange={handleChange} value={values.repeat} />
          <span>Repeat your password without errors</span>
          <ErrorMessage name="repeat" className="passwordErr" component="div" />
          <input className="registration__button" type="submit" value="Sing Up" disabled={isSubmitting} />
          <img className="authPicture" src="./assets/image/registrationPicture.svg" alt="auth picture" />
        </RegistrationForm>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
