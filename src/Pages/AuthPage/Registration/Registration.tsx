import React, { useState } from 'react';
import { registrationRequest } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { RegistrationForm } from './Registration.styled';

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReplay, setPasswordReplay] = useState('');
  const [wrongReplay, setwrongReplay] = useState('');

  const registration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentUser = {
      email,
      password,
    };

    if (password !== passwordReplay) {
      setPasswordReplay('');
      setPassword('');
      setwrongReplay('passwords are not the same');
      return;
    }

    if (password === passwordReplay) {
      setwrongReplay('');
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

  const emailErr = (user.emailErr).map((item, index) => {
    return (<span className="emailErr" key={index}>{item}</span>);
  });

  const passwordErr = (user.passwordErr).map((item, index) => {
    return (<span className="passwordErr" key={index}>{item}</span>);
  });

  return (
    // eslint-disable-next-line
    <RegistrationForm onSubmit={registration} passwordIsWrong={user.passwordIsWrong} emailIsWrong={user.emailIsWrong}>
      <h1 className="registration__header">Sing Up</h1>
      <input className="registration__input registration__email" type="text" placeholder="Email" onChange={emailInput} value={email} />
      <span>Enter your email</span>
      {emailErr}
      <input className="registration__input registration__password" type="password" placeholder="Password" onChange={passwordInput} value={password} />
      <span>Enter your password</span>
      <span className="replayErr">{wrongReplay}</span>
      {passwordErr}
      <input className="registration__input registration__password" type="password" placeholder="Password replay" onChange={passwordReplayInput} value={passwordReplay} />
      <span>Repeat your password without errors</span>
      <span className="replayErr">{wrongReplay}</span>
      {passwordErr}
      <input className="registration__button" type="submit" value="Sing Up" />
      <img className="authPicture" src="./assets/image/registrationPicture.svg" alt="auth picture" />
    </RegistrationForm>
  );
};

export default Registration;
