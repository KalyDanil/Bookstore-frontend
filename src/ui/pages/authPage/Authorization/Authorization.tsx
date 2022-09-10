import { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { authorizationRequest, nameChangerAction } from '../../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { AuthorizationForm } from './Authorization.styled';
import { authorizationShape } from '../../../../utils/schemas/auth';

const Authorization: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(nameChangerAction('SingUp'));
  }, [dispatch]);

  const emailErr = (user.emailErr).map((item, index) => {
    return (<span className="emailErr" key={index}>{item}</span>);
  });

  const passwordErr = (user.passwordErr).map((item, index) => {
    return (<span className="passwordErr" key={index}>{item}</span>);
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={authorizationShape}
        onSubmit={(values) => {
          const currentUser = {
            email: values.email,
            password: values.password,
          };
          dispatch(authorizationRequest(currentUser));
        }}
      >
        {({ handleChange, handleSubmit, errors, values, isSubmitting }) => (
        // eslint-disable-next-line
        <AuthorizationForm onSubmit={handleSubmit} emailIsWrong={user.emailIsWrong} passwordIsWrong={user.passwordIsWrong} emailValidation={errors.email} passwordValidation={errors.password}>
          <h1 className="authorization__header">Log In</h1>
          <Field className="authorization__input authorization__email" name="email" type="text" placeholder="Email" onChange={handleChange} value={values.email} />
          <span>Enter your email</span>
          <ErrorMessage name="email" className="emailErr" component="div" />
          {emailErr}
          <Field className="authorization__input authorization__password" name="password" type="password" autoComplete="false" placeholder="password" onChange={handleChange} value={values.password} />
          <span>Enter your password</span>
          <ErrorMessage name="password" className="passwordErr" component="div" />
          {passwordErr}
          <input className="authorization__button" type="submit" value="Log In" disabled={isSubmitting} />
          <img className="authPicture" src="./assets/image/registrationPicture.svg" alt="auth picture" />
        </AuthorizationForm>
        )}
      </Formik>
    </div>
  );
};

export default Authorization;
