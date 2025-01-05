import React, { useState, useEffect } from "react";
import DashboardSectionDivider from "./DashboardSectionDivider";
import { useForm } from "react-hook-form";
import { Img } from "../../../../components/website/Img";
import avatar4 from "../../../../assets/imgs/website/avatar4.png";
import { CiFileOn } from "react-icons/ci";
import upload from "../../../../assets/imgs/website/upload.png";
import cursor from "../../../../assets/imgs/website/cursor.png";
import CountrySelector from "../../../../components/country_picker/selector";
import { COUNTRIES } from "../../../../components/country_picker/countries";
import PhotoUpload from "./PhotoUpload";
import Upload from "./Upload";
import { useUserStore } from "../../../../store/auth2";

function MyDetails() {
  const { user } = useUserStore();
  const inputStyle = { height: "44px", border: "1px solid #d0d5dd" };
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState("US");
  const initialData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
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

  useEffect(() => {
    setFormData({
      first_name: user?.fullName,
      last_name: user?.fullName,
      email: user?.email,
      phone_number: user?.phoneNumber,
      message: user?.message,
    });
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // onFormSubmit(formData);
  };
  return (
    <div className="mt-2">
      <form>
        <div
          className="font-inter text-mirage font-semibold"
          style={{ fontSize: "18px" }}
        >
          Personal info
        </div>
        <div
          className="mt-2 font-inter text-mirage font-normal"
          style={{ fontSize: "14px" }}
        >
          Update your photo and personal details here.
        </div>
        <DashboardSectionDivider />
        <div className="pt-6 flex items-baseline">
          <div
            className="w-72 font-inter text-mirage font-semibold"
            style={{ fontSize: "14px" }}
          >
            Name
          </div>

          <div className="flex ml-8 w-[32rem] justify-between max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <>
              <input
                placeholder="First name"
                type="text"
                style={inputStyle}
                className="text-xsm pl-2 w-[15.2rem] rounded-lg font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
                value={formData.first_name}
                {...register("first_name", { minLength: 2 })}
                onChange={handleChange}
              ></input>
            </>
            {errors.first_name && (
              <p className="text-sm text-red-600">Enter a valid name</p>
            )}
            <>
              <input
                className="text-xsm pl-2 w-[15.2rem] font-inter rounded-lg font-normal leading-5 text-slate-700 max-md:max-w-full"
                placeholder="Last name"
                type="text"
                style={inputStyle}
                value={formData.last_name}
                {...register("last_name", { minLength: 2 })}
                onChange={handleChange}
              ></input>
            </>
            {errors.last_name && (
              <p className="text-sm text-red-600">Enter a valid name</p>
            )}
          </div>
        </div>
        <DashboardSectionDivider />
        <div className="flex items-baseline mt-6 ">
          <div
            className="w-72 font-inter text-mirage font-semibold"
            style={{ fontSize: "14px" }}
          >
            Email address
          </div>

          <div className="ml-8">
            <input
              className="w-[32rem] pl-2 text-xsm rounded-lg font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
              placeholder="you@company.com"
              type="email"
              style={inputStyle}
              value={formData.email}
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <DashboardSectionDivider />
        <div className="flex items-baseline mt-3">
          <div
            className="w-72 font-inter text-mirage font-semibold"
            style={{ fontSize: "14px" }}
          >
            Country
          </div>
          <div className="ml-8">
            <CountrySelector
              id={"country-selector"}
              open={isOpen}
              onToggle={() => setIsOpen(!isOpen)}
              onChange={setCountry}
              selectedValue={COUNTRIES.find(
                (option) => option.value === country
              )}
            />
          </div>
        </div>

        <DashboardSectionDivider />
        <div className="flex item">
          <div children="flex flex-col">
            <div
              className="mt-6 w-72 font-inter text-mirage font-semibold"
              style={{ fontSize: "14px" }}
            >
              Your photo
            </div>
            <div
              className="mt-2 w-72 font-inter text-mirage font-normal"
              style={{ fontSize: "14px" }}
            >
              This will be displayed on your profile.
            </div>
          </div>
          <div className="flex ml-8 mt-4 w-[32rem]">
            <Img className="h-[64px] w-[64px] rounded-full" src={avatar4} />
            {/* <PhotoUpload /> */}
            <Upload />
          </div>
        </div>
        <DashboardSectionDivider />
        {/* <div
          className="mt-6 w-72 font-inter text-mirage font-semibold"
          style={{ fontSize: "14px" }}
        >
          Work
        </div>
        <DashboardSectionDivider /> */}

        <div
          className="mt-16 w-72 font-inter text-mirage font-semibold"
          style={{ fontSize: "14px" }}
        ></div>
        {/* <DashboardSectionDivider /> */}
      </form>
    </div>
  );
}

export default MyDetails;
