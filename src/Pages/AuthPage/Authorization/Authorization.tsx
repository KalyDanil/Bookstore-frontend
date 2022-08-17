import { useState, useEffect } from 'react';
import { authorizationRequest, nameChangerAction } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { AuthorizationForm } from './Authorization.styled';

const Authorization: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(nameChangerAction('SingUp'));
  }, [dispatch]);

  const authorization = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentUser = { email, password };
    dispatch(authorizationRequest(currentUser));
    setEmail('');
    setPassword('');
  };

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const emailErr = (user.emailErr).map((item, index) => {
    return (<span className="emailErr" key={index}>{item}</span>);
  });

  const passwordErr = (user.passwordErr).map((item, index) => {
    return (<span className="passwordErr" key={index}>{item}</span>);
  });

  return (
    // eslint-disable-next-line
    <AuthorizationForm onSubmit={authorization} emailIsWrong={user.emailIsWrong} passwordIsWrong={user.passwordIsWrong}>
      <h1 className="authorization__header">Log In</h1>
      <input className="authorization__input authorization__email" type="text" placeholder="Email" onChange={emailInput} value={email} />
      <span>Enter your email</span>
      {emailErr}
      <input className="authorization__input authorization__password" type="password" placeholder="password" onChange={passwordInput} value={password} />
      <span>Enter your password</span>
      {passwordErr}
      <input className="authorization__button" type="submit" value="Log In" />
      <img className="authPicture" src="./assets/image/registrationPicture.svg" alt="auth picture" />
    </AuthorizationForm>
  );
};

export default Authorization;
