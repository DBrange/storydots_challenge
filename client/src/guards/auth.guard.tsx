import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import ExpiresToken from "../utilities/expires-token";

export const AuthGuard = () => {
  const user = useSelector((store: AppStore) => store.user);
  ExpiresToken();
  return user.sub ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}