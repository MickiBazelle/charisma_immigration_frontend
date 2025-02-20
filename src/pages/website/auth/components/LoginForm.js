import { Form } from "semantic-ui-react";
import { Img } from "../../../../components/website/Img";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../../../components/global/Loader";
import { useNavigate } from "react-router-dom";

function LoginForm({ onFormSubmit, isLoading }) {
  const navigator = useNavigate();

  const handleRouteToSignup = (e) => {
    navigator("/register/");
  };

  const buttonStyle = {
    height: "44px",
  };
  const inputStyle = {
    height: "44px",
    "::placeholder": {
      color: "#667085",
      opacity: "1",
    },
  };

  const initialData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialData);
  //     const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!isLoading) {
      onFormSubmit(formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field className="flex flex-col flex-1">
        <div className="mt-8 mb-1.5 text-left justify-start text-sm font-medium leading-5 text-slate-700">
          Email
        </div>
        <input
          className="justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 placeholder-slate-700 text-gray-500 whitespace-nowrap bg-white rounded-lg border border-solid border-[color:var(--Colors-Border-border-primary,#D0D5DD)] text-ellipsis max-md:max-w-full"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          onChange={handleChange}
          style={inputStyle}
        ></input>
      </Form.Field>
      {errors.email && (
        <p className="text-sm text-red-600">Enter a valid email</p>
      )}
      <Form.Field className="flex flex-col flex-1">
        <div className="mt-1 mb-1.5 text-left justify-start text-sm font-medium leading-5 placeholder-slate-700 text-slate-700">
          Password
        </div>
        <input
          className="justify-center px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 whitespace-nowrap bg-white rounded-lg border border-solid border-[color:var(--Colors-Border-border-primary,#D0D5DD)] text-ellipsis max-md:max-w-full"
          placeholder="••••••••"
          type="password"
          value={formData.password}
          {...register("password", {
            required: true,
            pattern: /^(?=.*\d).{6,}$/,
          })}
          onChange={handleChange}
          style={inputStyle}
        ></input>
      </Form.Field>
      {errors.password && (
        <p className="text-sm text-red-600">Enter a valid password</p>
      )}
      <button
        className={`flex justify-center gap-2 items-center px-16 py-2.5 mt-6 max-w-full font-semibold 
          text-white ${isLoading ? "bg-blue-300" : "bg-blue-500"}  rounded-lg border border-solid shadow-sm
           border-[color:var(--Official-color,#507EF5)] w-[360px] 
           max-md:px-5`}
        style={buttonStyle}
      >
        <div>Sign in</div>
        {isLoading && <Loader mode="light" />}
      </button>

      <button
        className="flex items-center justify-center grow text-left mt-3 bg-white rounded-lg border border-borderBlack text-slate-700 w-[360px]"
        style={buttonStyle}
        disabled={isLoading}
      >
        {" "}
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/336bfc90efb88be98e875a504701466cb2571e980965d7557207ba1915fc321a?"
          className="w-[24px] aspect-square mr-3"
        />
        <div>Sign up with Google</div>
      </button>
      <div className="flex justify-center gap-2 px-20 mt-8 mb-36 max-w-full font-inter text-sm leading-5 w-[360px] max-md:px-5 max-md:mb-10">
        <div className=" text-slate-600">Don't have an account?</div>
        <div
          className="font-semibold font-inter text-blue-500 cursor-pointer"
          onClick={handleRouteToSignup}
        >
          Sign up
        </div>
      </div>
    </Form>
  );
}

export default LoginForm;
