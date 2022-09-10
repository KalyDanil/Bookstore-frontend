import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import type { AxiosError } from 'axios';
import { userSlice } from './slicer';
/* eslint-disable */
import type { 
  IAvatarUpload, 
  IEditPasswordReq, 
  IEditReq, 
  IRegistrationReq 
} from '../../../types/user';
import { 
  authorization, 
  authorizationByToken, 
  edit, 
  editPassword, 
  registration, 
  uploadAvatar 
} from '../../../api/userApi';
/* eslint-enable */

export const {
  authorizationAction,
  refusalAction,
  avatarUploadAction,
  nameChangerAction,
  emailErrAction,
  passwordErrAction,
  oldPasswordErrAction,
} = userSlice.actions;

export const authorizationRequest = createAsyncThunk('users/authorization',
  async (body: IRegistrationReq, { dispatch }) => {
    try {
      const res = await authorization(body);
      dispatch(authorizationAction(res.user));
      localStorage.setItem('token', res.token);
      window.location.href = '/main';
    } catch (err) {
      const emailErr: string[] = [];
      const passwordErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data.data;
      for (const error of errorArr) {
        if (error.key === 'email') {
          emailErr.push(error.message);
        }
        if (error.key === 'password') {
          passwordErr.push(error.message);
        }
      }
      dispatch(emailErrAction(emailErr));
      dispatch(passwordErrAction(passwordErr));
    }
  });

export const authorizationByTokenRequest = createAsyncThunk('users/authorization-by-token',
  async (params, { dispatch }) => {
    try {
      const res = await authorizationByToken();
      dispatch(authorizationAction(res));
    } catch (err) {
      // eslint-disable-next-line
      console.log((err as Error).message);
    }
  });

export const registrationRequest = createAsyncThunk('users/registration',
  async (body: IRegistrationReq, { dispatch }) => {
    try {
      const res = await registration(body);
      dispatch(authorizationAction(res.user));
      localStorage.setItem('token', res.token);
      window.location.href = '/main?page=1';
    } catch (err) {
      const emailErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data.data;
      for (const error of errorArr) {
        if (error.key === 'email') {
          emailErr.push(error.message);
        }
      }
      dispatch(emailErrAction(emailErr));
    }
  });

export const editRequest = createAsyncThunk('users/edit-info',
  async (body: IEditReq, { dispatch }) => {
    try {
      const res = await edit(body);
      if (res) { window.location.reload(); }
    } catch (err) {
      const emailErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data.data;
      for (const error of errorArr) {
        if (error.key === 'email') {
          emailErr.push(error.message);
        }
      }
      dispatch(emailErrAction(emailErr));
    }
  });

export const editPasswordRequest = createAsyncThunk('users/edit-password',
  async (body: IEditPasswordReq, { dispatch }) => {
    try {
      const res = await editPassword(body);
      if (res) { window.location.reload(); }
    } catch (err) {
      const oldPasswordErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data.data;
      for (const error of errorArr) {
        if (error.key === 'password') {
          oldPasswordErr.push(error.message);
        }
      }
      dispatch(oldPasswordErrAction(oldPasswordErr));
    }
  });

export const uploadAvatarRequest = createAsyncThunk('users/upload-avatar',
  async (body: IAvatarUpload) => {
    try {
      uploadAvatar(body);
      return;
    } catch (err) {
      toast((err as Error).message);
    }
  });
