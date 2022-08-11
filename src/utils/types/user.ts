import { ReactElement } from 'react';

export interface IRegistrationUser {
  id: number,
  fullName: string,
  dob: string,
  email: string,
  password: string,
  avatar: string,
  token: string,
  tokenIsValid: boolean,
  loadingTokenVerify: boolean,
  headerButton: string,
  editResponse: string
}

export interface IDbUser {
  id: number;
  UserBook: {
    rating: number,
    inCart: number,
    isLiked: boolean,
  }
  comment: string,
  createdAt: Record<string, unknown>,
}

export interface IRegistrationReq {
  email: string,
  password: string
}

export interface IEditReq {
  fullName: string,
  email: string,
}

export interface IEditPasswordReq {
  newPassword: string,
  oldPassword: string,
  token: string | null
}

export interface IAvatarConfig {
  headers: {
    'Content-Type': string,
  },
  params: {
    token: string | null,
  }
}

export interface ModalProps {
  visible: boolean
  title: string
  content: ReactElement | string
  footer: ReactElement | string
  onClose: () => void
}