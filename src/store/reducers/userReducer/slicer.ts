import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IRegistrationUser, IUser } from '../../../types/user';
import { authorizationByTokenRequest } from './thunks';

const authorizationAction = (
  state: IRegistrationUser, action: PayloadAction<IUser>,
) => {
  state.id = action.payload.id;
  state.fullName = action.payload.fullName;
  state.email = action.payload.email;
  if (action.payload.tokenIsValid !== undefined) {
    state.tokenIsValid = action.payload.tokenIsValid;
  } else { state.tokenIsValid = true; }
  if (action.payload.avatar === null || action.payload.avatar === undefined) {
    state.avatar = 'defaultAvatar.svg';
  } else { state.avatar = action.payload.avatar; }
};

const refusalAction = (state: IRegistrationUser) => {
  state.tokenIsValid = false;
};

const avatarUploadAction = (state: IRegistrationUser, action: PayloadAction<string>) => {
  state.avatar = action.payload;
};

const nameChangerAction = (state: IRegistrationUser, action: PayloadAction<string>) => {
  state.headerButton = action.payload;
};

const emailErrAction = (state: IRegistrationUser, action: PayloadAction<string[]>) => {
  if (action.payload.length === 0) {
    state.emailErr = action.payload;
    state.emailIsWrong = false;
    return;
  }
  state.emailErr = action.payload;
  state.emailIsWrong = true;
};

const oldPasswordErrAction = (state: IRegistrationUser, action: PayloadAction<string[]>) => {
  if (action.payload.length === 0) {
    state.oldPasswordErr = action.payload;
    state.oldPasswordIsWrong = false;
    return;
  }
  state.oldPasswordErr = action.payload;
  state.oldPasswordIsWrong = true;
};

const passwordErrAction = (state: IRegistrationUser, action: PayloadAction<string[]>) => {
  if (action.payload.length === 0) {
    state.passwordErr = action.payload;
    state.passwordIsWrong = false;
    return;
  }
  state.passwordErr = action.payload;
  state.passwordIsWrong = true;
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
        state.loadingTokenVerify = true;
      });
  },
});

export default userSlice.reducer;
