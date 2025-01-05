import React, { useState } from "react";
import DashboardSectionDivider from "./DashboardSectionDivider";
import { useForm } from "react-hook-form";
import { Form } from "semantic-ui-react";
import axiosClientInstance from "../../../../utils/axios_client";
import { toast, ToastContainer } from "react-toastify";

function Password() {
  const inputStyle = { height: "44px", border: "1px solid #d0d5dd" };
  const [isLoading, setIsLoading] = useState(false);
  // Default this to a country's code to preselect it
  const initialData = {
    old_password: "",
    new_password: "",
    confirm_new_password: "",
  };
  const [formData, setFormData] = useState(initialData);
  //   const [isLoading, setIsLoading] = useState(false);

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
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const passwordData = {
      old_password: data.old_password,
      new_password: data.new_password,
    };
    await axiosClientInstance
      .post("/clients/change_password/", passwordData)
      .then((res) => {
        setIsLoading(false);
        const successMessage = res.data.message;
        toast.success(successMessage);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="mt-2">
      <ToastContainer pauseOnHover theme="colored" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="font-inter text-mirage font-semibold"
          style={{ fontSize: "18px" }}
        >
          Password
        </div>
        <div
          className="mt-2 font-inter text-mirage font-normal"
          style={{ fontSize: "14px" }}
        >
          Please enter your current password to change your password.
        </div>
        <DashboardSectionDivider />
        <div className="pt-6 flex items-baseline">
          <div
            className="w-72 font-inter text-mirage font-semibold"
            style={{ fontSize: "14px" }}
          >
            Current password
          </div>
          <div className="ml-8">
            <Form.Field>
              <input
                className="w-[32rem] pl-2 text-xsm rounded-lg font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
                placeholder="••••••••"
                style={inputStyle}
                type="password"
                value={formData.old_password}
                {...register("old_password", {
                  required: true,
                  pattern: /^(?=.*\d).{6,}$/,
                })}
                onChange={handleChange}
              />
            </Form.Field>
            {errors.old_password && (
              <p className="text-sm text-red-600">Enter a valid old password</p>
            )}
          </div>{" "}
        </div>
        <DashboardSectionDivider />
        <div className="flex items-baseline mt-6 ">
          <div
            className="w-72 font-inter text-mirage font-semibold"
            style={{ fontSize: "14px" }}
          >
            New password
          </div>
          <div className="ml-8">
            <input
              className="w-[32rem] pl-2 text-xsm rounded-lg font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
              placeholder="••••••••"
              style={inputStyle}
              type="password"
              value={formData.new_password}
              {...register("new_password", {
                required: true,
                pattern: /^(?=.*\d).{6,}$/,
              })}
              onChange={handleChange}
            />
            {errors.new_password && (
              <p className="text-sm text-red-600">Enter a valid new password</p>
            )}
          </div>{" "}
        </div>
        <DashboardSectionDivider />
        <div className="flex items-baseline mt-3">
          <div
            className="w-72 font-inter text-mirage font-semibold"
            style={{ fontSize: "14px" }}
          >
            Confirm new password
          </div>
          <div className="ml-8">
            <input
              className="w-[32rem] pl-2 text-xsm rounded-lg font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
              placeholder="••••••••"
              style={inputStyle}
              type="password"
              value={formData.confirm_new_password}
              {...register("confirm_new_password", {
                required: true,
                validate: (val) => {
                  if (watch("new_password") !== val) {
                    return "Your passwords do not match";
                  }
                },
              })}
              onChange={handleChange}
            />
            {errors.confirm_new_password && (
              <p className="text-sm text-red-600">Passwords do not match</p>
            )}
          </div>{" "}
        </div>

        <DashboardSectionDivider />
        <div className="mt-16 absolute right-16">
          <button
            type="submit"
            className="bg-dodgerBlue text-white px-4 py-2 rounded-lg"
            style={{ height: "40px" }}
          >
            Update password
          </button>
        </div>
        <div
          className="mt-16 w-72 font-inter text-mirage font-semibold"
          style={{ fontSize: "14px" }}
        ></div>
      </form>
    </div>
  );
}

export default Password;
