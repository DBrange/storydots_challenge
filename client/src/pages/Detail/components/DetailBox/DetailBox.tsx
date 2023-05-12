import useSWR from "swr";
// import { BaseUrl, getProduct } from "./services";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl, getProduct } from "../../services";
import { PrivateRoutes, PublicRoutes } from "../../../../models";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { AppStore } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { Button } from "../../../../components";

function DetailBox() {
  const { id } = useParams();
  const { data } = useSWR(`${BaseUrl}${id}`, getProduct);
  const [activeModal, setActiveModal] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store: AppStore) => store.user);
  const path = () => {
    if (user.sub) {
      navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PRODUCT_EDIT}/${id}`);
    } else {
      navigate(`/${PublicRoutes.LOGIN}`);
    }
  };

  const deleteProd = () => {
    if (user.sub) {
      setActiveModal(true);
    } else {
      navigate(`/${PublicRoutes.LOGIN}`);
    }
  };
  return (
    <>
      <div
        className={`${
          activeModal
            ? "opacity-1 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-all duration-300 fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-60 flex justify-center items-center`}
      >
        <Modal setActiveModal={setActiveModal} />
      </div>
      <div>
        <div className="w-full flex justify-center items-center">
          <img className="object-cover w-[200px]" src={data?.image} alt="" />
        </div>
        <h3 className="py-3 text-pink-500 text-xl">{`${data?.brand?.brand} ${data?.name}`}</h3>
        <h3>{data?.description}</h3>
        <div className="flex justify-between items-center mt-8">
        <Button>Comprar</Button>
        <h3 className="text-pink-500 text-xl">${data?.price}</h3>
        </div>
      </div>
      <div className="flex flex-col items-start mt-10 text-gray-500 gap-3">
        <button onClick={path}>Editar</button>
        <button onClick={deleteProd}>Borrar</button>
      </div>
    </>
  );
}
export default DetailBox;
