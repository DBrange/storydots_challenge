import { useNavigate } from "react-router-dom";
import { DetailBox, DetailContainer } from "./components";
import { BiArrowBack } from "react-icons/bi";

function Detail() {
  const navigate = useNavigate()
  return (
    <DetailContainer>
      <div onClick={() => navigate(-1)} className="text-gray-400 cursor-pointer w-10 text-2xl p-2">
        <BiArrowBack />
      </div>
      <DetailBox />
    </DetailContainer>
  );
}
export default Detail;
