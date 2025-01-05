import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import * as eva from "eva-icons";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import ErrorAlert from "../../components/ErrorAlert";
import AdminLoginForm from "../../components/admin_auth/AdminLoginForm";
import { toast, ToastContainer } from "react-toastify";

const SectionTitle = ({ text }) => (
  <h2 className="mt-6 text-3xl font-semibold leading-10 text-center text-gray-900">
    {text}
  </h2>
);
const Subtitle = ({ text }) => (
  <div className="mt-3 text-center text-slate-600">{text}</div>
);
const InformationBlock = ({ label, children }) => (
  <>
    <label
      htmlFor={label}
      className="mt-5 text-sm font-medium leading-5 text-slate-700 sr-only"
    >
      {label}
    </label>
    {children}
  </>
);

function AdminLogin(props) {
  const navigate = useNavigate();
  useEffect(() => {
    // add this line
    eva.replace();
  }, []);

  const [apiResponse, setResponse] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isAlertClose, setAlertClose] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
      validationErrors.password = "Invalid password";
    } else {
      //  handleSubmit();
    }
    setErrors(validationErrors);
  };

  const onAlertClose = (e) => {
    setAlertClose(true);
  };

  const handleSubmit = async (formData) => {
    await axiosInstance
      .post(`/accounts/login/`, formData)
      .then((res) => {
        const { token, refresh_token } = res.data;
        localStorage.clear();
        toast.success(res.data.message);
        localStorage.setItem("token", token);
        localStorage.setItem("refresh_token", refresh_token);
        navigate("/accounts/dashboard/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        if (error.response) {
          setResponse(error.response);
        }
      });
  };

  return (
    <div className={`${classes.half} d-lg-flex `}>
      <ToastContainer pauseOnHover theme="colored" />
      <div
        class={`${classes.bg} order-1 order-md-2 ${classes.bgImage} image-overlay`}
      ></div>
      <div className={`${classes.contents} order-2 order-md-1`}>
        <div className={classes.container}>
          <div
            className={`align-items-center justify-content-center ${classes.row} ${classes.center_login} `}
          >
            <div className="col-md-7">
              {isAlertClose ? (
                <div></div>
              ) : (
                <ErrorAlert response={apiResponse} onClicked={onAlertClose} />
              )}

              <SectionTitle text="Log in to your account" />
              <Subtitle text="Welcome back! Please enter your details." />
              <AdminLoginForm onFormSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
