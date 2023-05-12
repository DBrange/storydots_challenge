import { useNavigate } from "react-router-dom";
import { FormProvider } from "./context";
import { FormBox } from "./components";
import { BiArrowBack } from "react-icons/bi";


function Form() {
  const navigate = useNavigate();
  return (
    <FormProvider>
      <div
        onClick={() => navigate(-1)}
        className="text-gray-400 mt-10 w-10 cursor-pointer text-2xl p-2 "
      >
        <BiArrowBack />
      </div>
      <FormBox />
    </FormProvider>
  );
}
export default Form;
