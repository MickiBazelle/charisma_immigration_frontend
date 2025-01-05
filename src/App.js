import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import Cookie from "js-cookie";
import { inValidateUser, isAccessTokenExpired } from "./utils/auth";

import { router } from "./routes";

function App() {
  useEffect(()=>{
    const token = Cookie.get("token");
    const isTokenExpired = isAccessTokenExpired(token);
    if (isTokenExpired){
      inValidateUser();
    }
  }, []);

  useEffect(() => {
    
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
