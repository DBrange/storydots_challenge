import { useNavigate } from "react-router-dom";
import { FormBox } from "./components";
import { EditProvider } from "./context";
import { BiArrowBack } from "react-icons/bi";

function Edit() {
  const navigate = useNavigate()
  return (
    <div className="m-auto text-center mt-10">
      <EditProvider>
        <div
          onClick={() => navigate(-1)}
          className="text-gray-400 w-10 cursor-pointer text-2xl p-2"
        >
          <BiArrowBack />
        </div>
        <FormBox />
      </EditProvider>
    </div>
  );
}
export default Edit;
