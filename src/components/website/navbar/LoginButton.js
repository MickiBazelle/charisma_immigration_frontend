import { useNavigate } from "react-router-dom";
import {useUserStore} from '../../../store/auth2';

function LoginButton() {
  const navigate = useNavigate();

  const {isLoggedIn} = useUserStore();

  const islogged = isLoggedIn();

  const handleLoginClicked = (e) => {
   navigate(islogged ? "/user/dashboard/": '/login/');
  };

  return (
    <div className="flex font-medium">
      <button
        onClick={handleLoginClicked}
        className="grow justify-center font-inter text-sm h-[44px] px-3 text-white whitespace-nowrap rounded-xl bg-gradient-to-tr from-brightViolet via-blueLotus to-neonBlue border-1 border-purpleShadeBush"
      >
        {islogged ? 'Members Area': 'Login' }
        
      </button>
    </div>
  );
}

export default LoginButton;
