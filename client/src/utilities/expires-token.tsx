import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../redux/slices/userSlice";
import { AppStore } from "../redux/store";


const ExpiresToken = (): void => {
  const dispatch = useDispatch();
  const user = useSelector((store: AppStore) => store.user);
  const date = new Date();
  const currentDate = Math.floor(date.getTime() / 1000);
  if (user.exp <= +currentDate) dispatch(resetUser());
}

export default ExpiresToken
