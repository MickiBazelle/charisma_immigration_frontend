import CIHeader from "./CIHeader";
import CINavbar from "./CINavbar";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

const CharismaImmigrationsHeader = ({ onServicesClick }) => (
  <div className="">
    <div className="">
      <CINavbar onServicesClick={onServicesClick} />
    </div>
  </div>
);

export default CharismaImmigrationsHeader;
