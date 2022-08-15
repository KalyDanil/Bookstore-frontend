import { useState } from 'react';
import { editPasswordRequest, editRequest } from '../../../store/reducers/userReducer/thunks';
import { useAppDispatch } from '../../../utils/hooks/useAppDispatch';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';
import { DivStyle } from './PersonalInformation.styled';

const PersonalInformation: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [fullNameEditing, setFullNameEditing] = useState('');
  const [emailEditing, setEmailEditing] = useState('');
  const [oldPassword, setPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [newPasswordReplay, setnewPasswordReplay] = useState('');
  const [newPasswordIsMaking, setnewPasswordIsMaking] = useState(false);
  const [informationIsEditing, setinformationIsEditing] = useState(false);

  const emailInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailEditing(e.target.value);
  };

  const fullNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullNameEditing(e.target.value);
  };

  const startToEditInformation = () => {
    setinformationIsEditing(!informationIsEditing);
    setFullNameEditing(user.fullName);
    setEmailEditing(user.email);
  };

  const ConfirmInformationChanges = async () => {
    const newInformation = {
      fullName: fullNameEditing,
      email: emailEditing,
    };
    dispatch(editRequest(newInformation));
  };

  const oldPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const newPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewPassword(e.target.value);
  };

  const newPasswordReplayInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewPasswordReplay(e.target.value);
  };

  const startToChangePassword = () => {
    setnewPasswordIsMaking(!newPasswordIsMaking);
  };

  const ConfirmNewPassword = async () => {
    if (newPassword !== newPasswordReplay) {
      setnewPassword('');
      setnewPasswordReplay('');
      return alert('Passwords are not the same');
    }

    const passwordBody = {
      newPassword,
      oldPassword,
      token: localStorage.getItem('token'),
    };

    dispatch(editPasswordRequest(passwordBody));
  };

  return (
    <DivStyle newPasswordIsMaking={newPasswordIsMaking} informationIsEditing={informationIsEditing}>
      <div className="personalInformation__header">
        <h1>Personal information</h1>
        <span onClick={startToEditInformation}>Change information</span>
      </div>
      <div className="personalInformation__div">
        <span>Your name</span>
        <img src="./assets/image/profileYourName.svg" alt="yourName" />
        <input className="personalInformation__inputText" type="text" value={user.fullName} readOnly />
      </div>
      <div className="personalInformation__div">
        <span>Your email</span>
        <img src="./assets/image/email.svg" alt="yourEmail" />
        <input className="personalInformation__inputText" type="text" value={user.email} readOnly />
        <input className="personalInformation__button" type="button" value="Confirm" />
      </div>
      <div className="personalInformationEditing__div">
        <span>Your name</span>
        <img src="./assets/image/profileYourName.svg" alt="yourName" />
        <input className="personalInformation__inputText" type="text" onChange={fullNameInput} value={fullNameEditing} />
      </div>
      <div className="personalInformationEditing__div">
        <span>Your email</span>
        <img src="./assets/image/email.svg" alt="yourEmail" />
        <input className="personalInformation__inputText" type="text" onChange={emailInput} value={emailEditing} />
        <input className="personalInformation__button" type="button" onClick={ConfirmInformationChanges} value="Confirm" />
      </div>
      <div className="personalInformation__passwordHeader">
        <h1>Password</h1>
        <span onClick={startToChangePassword}>Change password</span>
      </div>
      <div className="personalInformation__oldPasswordStatic">
        <span className="personalInformation__password-text">Old password</span>
        <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
        <input className="personalInformation__inputText" type="password" value="blablablablablablablabla" readOnly />
      </div>
      <div className="personalInformation__oldPassword">
        <span className="personalInformation__password-text">Old password</span>
        <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
        <input className="personalInformation__inputText" type="password" onChange={oldPasswordInput} value={oldPassword} />
      </div>
      <div className="personalInformation__newPassword">
        <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
        <input type="password" placeholder="Password replay" onChange={newPasswordInput} value={newPassword} />
        <span>Enter your password</span>
      </div>
      <div className="personalInformation__newPassword">
        <img className="personalInformation__imgHide" src="./assets/image/hide.svg" alt="hide" />
        <input type="password" placeholder="Password replay" onChange={newPasswordReplayInput} value={newPasswordReplay} />
        <span>Repeat your password without errors</span>
      </div>
      <input className="personalInformation__passwordButton" type="button" onClick={ConfirmNewPassword} value="Confirm" />
    </DivStyle>
  );
};

export default PersonalInformation;
