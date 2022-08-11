import { api } from '.';
import type { IAvatarConfig, IEditPasswordReq, IEditReq, IRegistrationReq, IRegistrationUser } from '../utils/types/user';

export const authorization = async (params: IRegistrationReq) => {
  const res: IRegistrationUser = await api.get('auth/authorization', { params });
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
  const res: IRegistrationUser = await api.put('user/edit', body);
  return res;
};

export const editPassword = async (body: IEditPasswordReq) => {
  const res: IRegistrationUser = await api.put('user/edit-password', body);
  return res;
};

export const uploadAvatar = async (file: FormData, config: IAvatarConfig) => {
  api.post('user/avatar-upload', file, config);
};
