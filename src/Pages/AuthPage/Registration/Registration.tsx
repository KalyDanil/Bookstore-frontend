import React from 'react';
import { registrationRequest } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { RegistrationForm } from './Registration.styled';

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordReplay, setPasswordReplay] = React.useState('');

  const registration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentUser = {
      email,
      password,
    };

    if (password !== passwordReplay) {
      alert('Password must match password replay.');
      setPasswordReplay('');
      setPassword('');
      return;
    }

    dispatch(registrationRequest(currentUser));
  };

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const passwordReplayInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordReplay(e.target.value);
  };

  return (
    <RegistrationForm onSubmit={registration}>
      <h1 className="registration__header">Sing Up</h1>
      <input className="registration__input registration__email" type="email" placeholder="Email" onChange={emailInput} value={email} />
      <span>Enter your email</span>
      <input className="registration__input registration__password" type="password" placeholder="Password" onChange={passwordInput} value={password} />
      <span>Enter your password</span>
      <input className="registration__input registration__password" type="password" placeholder="Password replay" onChange={passwordReplayInput} value={passwordReplay} />
      <span>Repeat your password without errors</span>
      <input className="registration__button" type="submit" value="Sing Up" />
      <img className="authPicture" src="./assets/image/registrationPicture.svg" alt="auth picture" />
    </RegistrationForm>
  );
};

export default Registration;
