import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSlice, initialState } from './slicer';
import type { IEditPasswordReq, IEditReq, IRegistrationReq } from '../../../utils/types/user';
import { authorization, authorizationByToken, edit, editPassword, registration, uploadAvatar } from '../../../api/userApi';

export const {
  authorizationAction,
  refusalAction,
  avatarUploadAction,
  nameChangerAction,
} = userSlice.actions;

export const authorizationRequest = createAsyncThunk('users/authorization',
  async (params: IRegistrationReq, { dispatch }) => {
    try {
      const res = await authorization(params);
      dispatch(authorizationAction(res));
      localStorage.setItem('token', res.token);
      window.location.href = '/main?page=1';
    } catch (err) {
      console.log((err as Error).message);
      alert('Wrong password or email.');
    }
  });

export const authorizationByTokenRequest = createAsyncThunk('users/authorization-by-token',
  async (params, { dispatch }) => {
    try {
      const res = await authorizationByToken();
      dispatch(authorizationAction(res));
    } catch (err) {
      console.log((err as Error).message);
    }
  });

export const registrationRequest = createAsyncThunk('users/registration',
  async (body: IRegistrationReq, { dispatch }) => {
    try {
      const res = await registration(body);
      dispatch(authorizationAction(res));
      localStorage.setItem('token', res.token);
      window.location.href = '/main?page=1';
    } catch (err) {
      console.log((err as Error).message);
      dispatch(authorizationAction(initialState));
      alert('Such emails are not exist or wrong password. Password must have at least one capital letter, one symbol from (- _ + = ! ? % / | @ # $ № . ,) or one number, and its length must be at least 8.');
    }
  });

export const editRequest = createAsyncThunk('users/edit',
  async (body: IEditReq) => {
    try {
      const res = await edit(body);
      if (res) { window.location.reload(); }
    } catch (err) {
      if ((err as Error).message === 'Request failed with status code 400') {
        return alert('Missing required parameters.');
      }
      console.log((err as Error).message);
      alert('email must be a valid email');
    }
  });

export const editPasswordRequest = createAsyncThunk('users/edit-password',
  async (body: IEditPasswordReq) => {
    try {
      await editPassword(body);
      window.location.reload();
    } catch (err) {
      console.log((err as Error).message);
      if ((err as Error).message === 'Request failed with status code 400') {
        return alert('Missing required parameters.');
      }
      if ((err as Error).message === 'Request failed with status code 404') {
        return alert('Wrong old password.');
      }
      if ((err as Error).message === 'Request failed with status code 406') {
        return alert('Such emails are not exist or wrong password. Password must have at least one capital letter, one symbol from (- _ + = ! ? % / | @ # $ № . ,) or one number, and its length must be at least 8.');
      }
    }
  });

export const uploadAvatarRequest = createAsyncThunk('users/upload-avatar',
  async (file: FormData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        token: localStorage.getItem('token'),
      },
    };
    try {
      uploadAvatar(file, config);
      return;
    } catch (err) {
      console.log((err as Error).message);
      alert('Missing required file parameter.');
    }
  });
