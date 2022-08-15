import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IRegistrationUser } from '../../../types/user';
import { authorizationByTokenRequest } from './thunks';

const authorizationAction = (
  state: IRegistrationUser, action: PayloadAction<IRegistrationUser>,
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
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorizationAction,
    refusalAction,
    avatarUploadAction,
    nameChangerAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizationByTokenRequest.fulfilled, (state) => {
        state.loadingTokenVerify = true;
      });
  },
});

export default userSlice.reducer;
