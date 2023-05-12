import jwt_decode from "jwt-decode";
import { EmptyUserState, UserKey } from "../slices/userSlice";
import Cookies from "js-cookie";

export const decodeToken = () => {
  if (Cookies.get(UserKey)) {
    const token = Cookies.get(UserKey) as string;
    const decoded = jwt_decode(token);
    return decoded;
  } else {
    return EmptyUserState;
  }
};
