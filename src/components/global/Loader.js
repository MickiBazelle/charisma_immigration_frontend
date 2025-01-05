import { Img } from "../website/Img";
import loaderLight from "../../assets/imgs/loaders/spinner_light.gif";
import loaderDark from "../../assets/imgs/loaders/spinner_dark.gif";

function Loader({ mode }) {
  return (
    <div>
      <Img src={mode === "light" ? loaderLight : loaderDark} className="w-6" />
    </div>
  );
}

export default Loader;
