import React, { useState, useEffect } from "react";
import CharismaImmigrationsHeader from "../../../components/website/navbar/CharismaImmigrationsHeader";
import contactbg from "../../../assets/imgs/website/contactbg.png";
import { Img } from "../../../components/website/Img";
import WebsiteFooter from "../../../components/website/Footer";
import ContactUsForm from "./components/ContactUsForm";
import axiosInstance from "../../../axios";

function ContactUs(props) {
  const lableStyle = { fontSize: "0.875rem", fontWeight: "400" };
  const inputStyle = { height: "2.75rem" };

  const [isLoading, setIsLoading] = useState(false);
  // const [loadedUsers, setLoadedUsers] = useState([]);

  const handleSendMessage = async (formData) => {
    setIsLoading(true);
    
    axiosInstance
      .post("/messages/", formData)
      .then(async (res) => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };
  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full px-[55px]">
          <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-16 py-4 text-base leading-6 max-md:px-5 max-md:max-w-full">
              <CharismaImmigrationsHeader />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-wrap justify-center content-center px-10 mx-[40px] mt-[57px] mb-16 max-w-screen-xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col ml-[85px] w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch mt-[46px]  max-w-[480px] max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-3xl font-inter font-semibold tracking-tighter leading-10 text-gray-900 max-md:max-w-full">
                Get in touch
              </div>
              <div className="self-start mt-4 font-inter font-normal text-base leading-8 text-slate-600 max-md:max-w-full">
                Our friendly team would love to hear from you.
              </div>
              <ContactUsForm
                onFormSubmit={handleSendMessage}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Img
              loading="lazy"
              // src={contactUsBg}
              src={require("../../../assets/imgs/website/contactbg.png")}
              className="grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <WebsiteFooter />
    </div>
  );
}

export default ContactUs;
