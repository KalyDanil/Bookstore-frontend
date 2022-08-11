import { useState, useEffect } from 'react';
import { authorizationRequest, nameChangerAction } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { AuthorizationForm } from './Authorization.styled';

const Authorization: React.FC = () => {
  const dispatch = useAppDispatch();
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

  return (
    <AuthorizationForm onSubmit={authorization}>
      <h1 className="authorization__header">Log In</h1>
      <input className="authorization__input authorization__email" type="text" placeholder="Email" onChange={emailInput} value={email} />
      <span>Enter your email</span>
      <input className="authorization__input authorization__password" type="password" placeholder="password" onChange={passwordInput} value={password} />
      <span>Enter your password</span>
      <input className="authorization__button" type="submit" value="Log In" />
      <img className="authPicture" src="./assets/image/registrationPicture.svg" alt="auth picture" />
    </AuthorizationForm>
  );
};

export default Authorization;
