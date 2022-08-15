import { api } from '.';
import type { IAvatarConfig, IAvatarUpload, IEditPasswordReq, IEditReq, IRegistrationReq, IRegistrationUser } from '../types/user';

export const authorization = async (body: IRegistrationReq) => {
  const res: IRegistrationUser = await api.post('auth/authorization', body);
  return res;
};

export const authorizationByToken = async () => {
  const res: IRegistrationUser = await api.get('auth/authorization-by-token');
  return res;
};

export const registration = async (body: IRegistrationReq) => {
  const res: IRegistrationUser = await api.post('auth/registration', body);
  return res;
};

export const edit = async (body: IEditReq) => {
  const res: IRegistrationUser = await api.put('users/edit-info', body);
  return res;
};

export const editPassword = async (body: IEditPasswordReq) => {
  const res: IRegistrationUser = await api.put('users/edit-password', body);
  return res;
};

export const uploadAvatar = async (body: IAvatarUpload, config: IAvatarConfig) => {
  api.post('users/avatar-upload', body);
};
