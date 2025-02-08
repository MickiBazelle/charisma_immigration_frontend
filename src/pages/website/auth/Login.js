import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Img } from "../../../components/website/Img";
import { Form } from "semantic-ui-react";
import CharismaImmigrationsHeader from "../../../components/website/navbar/CharismaImmigrationsHeader";
import LoginForm from "./components/LoginForm";
import axiosInstance from "../../../axios";
import { loginUser } from "../../../utils/auth";
import { toast, ToastContainer } from "react-toastify";

function Login(props) {
  const navigate = useNavigate();
  useEffect(() => {
    // add this line
    // eva.replace();
  }, []);

  const notify = (message) => toast.error(message);

  const [apiResponse, setResponse] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isAlertClose, setAlertClose] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    const email = formData.email;
    const password = formData.password;

    const loginData = await loginUser(email, password);
    console.log(loginData.data);
    if (loginData.data !== null) {
      setIsLoading(false);
      navigate("/");
      // toast.success("Login successful");
    } else {
      setIsLoading(false);
      toast.error(loginData.error);
    }
    // await axiosInstance
    //   .post(`/clients/login/`, formData)
    //   .then((res) => {
    //     const { token, refresh_token } = res.data;
    //
    //     localStorage.clear();
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("refresh_token", refresh_token);
    //     setIsLoading(false);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       const errorData = error.response.data;
    //       notify(errorData.message);
    //       setResponse(error.response);

    //       setIsLoading(false);
    //
    //
    //     }
    //   });
  };
  return (
    <div className="flex flex-col items-center bg-white">
      {/* <ToastContainer pauseOnHover theme="colored" /> */}
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ae05814414988b1d5badde6f695ae2f94991bf4ccb2d466668c91af5f2b1a9d?"
        className=""
        style={{
          width: "48rem",
          height: "36.5rem",
          position: "absolute",
          marginTop: "",
        }}
      />
      {/* <ToastContainer pauseOnHover theme="colored" /> */}
      <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full px-[55px]">
        <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
          <div className="flex relative flex-col justify-center px-16 py-4 text-base leading-6 max-md:px-5 max-md:max-w-full">
            <CharismaImmigrationsHeader />
          </div>
        </div>

        <div className="flex flex-col items-center px-20 py-12 w-full whitespace-nowrap bg-white max-md:px-5 max-md:max-w-full">
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86a0b81efce0486d40f269da13c7168b929689aca09e23a6cb608579a8c92ced?"
            className="mt-12 relative aspect-[1.05] w-[43px] max-md:mt-10"
          />
          <div className="mt-6 text-2xl font-inter font-semibold leading-10 text-center text-gray-900">
            Log in to your account
          </div>
          <div className="mt-3 text-sm text-normal font-inter text-center text-slate-600">
            Welcome back! Please enter your details.
          </div>
          <LoginForm onFormSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Login;
