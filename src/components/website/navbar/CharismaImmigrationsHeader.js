import CIHeader from "./CIHeader";
import CINavbar from "./CINavbar";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

const CharismaImmigrationsHeader = (serVicesRef) => (
  <div className="">
    <div className="">
      <CINavbar serVicesRef={serVicesRef} />
    </div>
  </div>
);

export default CharismaImmigrationsHeader;
