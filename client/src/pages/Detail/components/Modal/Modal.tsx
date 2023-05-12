import useSWRMutation from "swr/mutation";
import { DeleteProductUrl, deleteProduct } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../../../components";

function Modal({
  setActiveModal,
}: {
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { reset, trigger } = useSWRMutation(`${DeleteProductUrl}/${id}`, deleteProduct);

  const deleteProd = () => {
    trigger()
    navigate(-1);
    reset();
  };

  return (
    <div className='h-[200px] bg-white mx-3 rounded-md flex flex-col justify-center items-center gap-3'>
      <h2>Esta serguro que quiere borrar este producto?</h2>
      <div className="flex gap-5">
        <Button handleClick={deleteProd}>
          Borrar
        </Button>
        <Button handleClick={() => setActiveModal(false)}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
export default Modal;
