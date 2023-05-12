import Cookies from "js-cookie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { ROLES } from "../../../../api/src/constants/roles";
import { decodeToken } from "../utilities/token.utility";

export const EmptyUserState: UserInfo = {
  role: '' as ROLES,
  sub: '',
  iat: 0,
  exp: 0,
};

export const UserKey = "accessToken";
export const secret = "didi@nestjs.com";

export const userSlice = createSlice({
  name: "user",
  initialState: decodeToken() as UserInfo,
  reducers: {
    addUser: () => {
      return decodeToken() as UserInfo
    },
    resetUser: () => {
      Cookies.remove(UserKey)
      return EmptyUserState;
    },
  },
});

export const { resetUser, addUser } = userSlice.actions

export default userSlice.reducer
