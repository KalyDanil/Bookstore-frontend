import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import { userSlice, initialState } from './slicer';
import type { IAvatarUpload, IEditPasswordReq, IEditReq, IRegistrationReq } from '../../../types/user';
import { authorization, authorizationByToken, edit, editPassword, registration, uploadAvatar } from '../../../api/userApi';

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
      dispatch(authorizationAction(res));
      localStorage.setItem('token', res.token);
      window.location.href = '/profile';
    } catch (err) {
      console.log((err as Error).message);
      const emailErr: string[] = [];
      const passwordErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data;
      for (const error of errorArr) {
        if (error.email) {
          emailErr.push(error.email);
        }
        if (error.password) {
          passwordErr.push(error.password);
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
      const emailErr: string[] = [];
      const passwordErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data;
      for (const error of errorArr) {
        if (error.email) {
          emailErr.push(error.email);
        }
        if (error.password) {
          passwordErr.push(error.password);
        }
      }
      dispatch(authorizationAction(initialState));
      dispatch(emailErrAction(emailErr));
      dispatch(passwordErrAction(passwordErr));
    }
  });

export const editRequest = createAsyncThunk('users/edit-info',
  async (body: IEditReq, { dispatch }) => {
    try {
      const res = await edit(body);
      if (res) { window.location.reload(); }
    } catch (err) {
      console.log((err as Error).message);
      const emailErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data;
      for (const error of errorArr) {
        if (error.email) {
          emailErr.push(error.email);
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
      console.log((err as AxiosError).response?.data);
      const passwordErr: string[] = [];
      const oldPasswordErr: string[] = [];
      const errorArr = (err as AxiosError).response?.data;
      for (const error of errorArr) {
        if (error.password) {
          passwordErr.push(error.password);
        }
        if (error.oldPassword) {
          oldPasswordErr.push(error.oldPassword);
        }
      }
      dispatch(oldPasswordErrAction(oldPasswordErr));
      dispatch(passwordErrAction(passwordErr));
    }
  });

export const uploadAvatarRequest = createAsyncThunk('users/upload-avatar',
  async (body: IAvatarUpload) => {
    try {
      uploadAvatar(body);
      return;
    } catch (err) {
      console.log((err as Error).message);
      alert('Missing required file parameter.');
    }
  });
