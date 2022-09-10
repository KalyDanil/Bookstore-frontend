import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IRegistrationUser, IUser } from '../../../types/user';
import { authorizationByTokenRequest } from './thunks';

const authorizationAction = (state: IRegistrationUser, action: PayloadAction<IUser>) => {
  const stateChange = state;
  stateChange.id = action.payload.id;
  stateChange.fullName = action.payload.fullName;
  stateChange.email = action.payload.email;
  if (action.payload.tokenIsValid !== undefined) {
    stateChange.tokenIsValid = action.payload.tokenIsValid;
  } else { stateChange.tokenIsValid = true; }
  if (action.payload.avatar === null || action.payload.avatar === undefined) {
    stateChange.avatar = 'defaultAvatar.svg';
  } else { stateChange.avatar = action.payload.avatar; }
};

const refusalAction = (state: IRegistrationUser) => {
  const stateChange = state;
  stateChange.tokenIsValid = false;
};

const avatarUploadAction = (state: IRegistrationUser, action: PayloadAction<string>) => {
  const stateChange = state;
  stateChange.avatar = action.payload;
};

const nameChangerAction = (state: IRegistrationUser, action: PayloadAction<string>) => {
  const stateChange = state;
  stateChange.headerButton = action.payload;
};

const emailErrAction = (state: IRegistrationUser, action: PayloadAction<string[]>) => {
  const stateChange = state;
  if (action.payload.length === 0) {
    stateChange.emailErr = action.payload;
    stateChange.emailIsWrong = false;
    return;
  }
  stateChange.emailErr = action.payload;
  stateChange.emailIsWrong = true;
};

const oldPasswordErrAction = (state: IRegistrationUser, action: PayloadAction<string[]>) => {
  const stateChange = state;
  if (action.payload.length === 0) {
    stateChange.oldPasswordErr = action.payload;
    stateChange.oldPasswordIsWrong = false;
    return;
  }
  stateChange.oldPasswordErr = action.payload;
  stateChange.oldPasswordIsWrong = true;
};

const passwordErrAction = (state: IRegistrationUser, action: PayloadAction<string[]>) => {
  const stateChange = state;
  if (action.payload.length === 0) {
    stateChange.passwordErr = action.payload;
    stateChange.passwordIsWrong = false;
    return;
  }
  stateChange.passwordErr = action.payload;
  stateChange.passwordIsWrong = true;
};

export const initialState: IRegistrationUser = {
  id: 0,
  fullName: '',
  dob: '',
  email: '',
  password: '',
  avatar: '',
  token: '',
  tokenIsValid: false,
  loadingTokenVerify: false,
  headerButton: 'LogIn',
  editResponse: '',
  emailErr: [],
  passwordErr: [],
  oldPasswordErr: [],
  emailIsWrong: false,
  passwordIsWrong: false,
  oldPasswordIsWrong: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizationAction,
    refusalAction,
    avatarUploadAction,
    nameChangerAction,
    emailErrAction,
    passwordErrAction,
    oldPasswordErrAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizationByTokenRequest.fulfilled, (state) => {
        const stateChange = state;
        stateChange.loadingTokenVerify = true;
      });
  },
});

export default userSlice.reducer;
