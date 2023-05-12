import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../../redux/store';
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../models";
import { resetUser } from "../../redux/slices/userSlice";

function Nav() {
  const dispatch = useDispatch()

  const user = useSelector((store: AppStore) => store.user)
  
  return (
    <div className="fixed top-0 h-8 text-center w-[100%] bg-white shadow-md flex justify-center items-center">
      {!user.sub ? (
        <Link to={`/${PublicRoutes.LOGIN}`}>
          <button className="text-pink-500">Login</button>
        </Link>
      ) : (
        <Link to={`/${PublicRoutes.PRODUCTS}`}>
          <button
            className="text-pink-500"
            onClick={() => dispatch(resetUser())}
          >
            Log out
          </button>
        </Link>
      )}
    </div>
  );
}
export default Nav