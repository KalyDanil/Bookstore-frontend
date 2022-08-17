import type { ReactElement } from 'react';

export interface IRegistrationUser {
  id: number;
  fullName: string;
  dob: string;
  email: string;
  password: string;
  avatar: string;
  token: string;
  tokenIsValid: boolean;
  loadingTokenVerify: boolean;
  headerButton: string;
  editResponse: string;
  emailErr: string[],
  passwordErr: string[],
  oldPasswordErr: string[],
  emailIsWrong: boolean,
  passwordIsWrong: boolean,
  oldPasswordIsWrong: boolean,
}

export interface IDbUser {
  id: number;
  UserBook: {
    rating: number;
    inCart: number;
    isLiked: boolean;
  };
  comment: string;
  createdAt: Record<string, unknown>;
}

export interface IRegistrationReq {
  email: string;
  password: string;
}

export interface IEditReq {
  fullName: string;
  email: string;
}

export interface IEditPasswordReq {
  password: string;
  oldPassword: string;
}

export interface IAvatarUpload {
  image: string | ArrayBuffer | null,
  imageName: string,
}

export interface IAvatarConfig {
  headers: {
    'Content-Type': string;
  };
}

export interface IModalProps {
  visible: boolean;
  title: string;
  content: ReactElement | string;
  footer: ReactElement | string;
  onClose: () => void;
}
