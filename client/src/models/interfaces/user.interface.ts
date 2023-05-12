import { ROLES } from '../../../../api/src/constants/roles';

export interface UserInfo {
  role: ROLES;
  sub: string;
  iat: number;
  exp: number;
}

export interface UserInfoUpdate {
  role?: ROLES;
  sub?: string;
  iat?: number;
  exp?: number;
}