import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Loader } from "semantic-ui-react";
import { FaLock } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import config from "../../../../config";
import { useForm } from "react-hook-form";
import Cookie from "js-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import axiosClientInstance from "../../../../utils/axios_client";

function StripePayment({ planSelected, selectedAmount }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!isLoading) {
      handleStripePost();
    }
  };

  const handleSubscriptionClick = () => {
    navigate("/user/dashboard/");
  };

  const buttonStyle = {
    height: "54px",
  };

  const handleStripePost = async () => {
    setIsLoading(true);
    const token = Cookie.get("token");

    await axiosClientInstance
      .post(
        `${config.baseURLDev}checkout/session/`,
        {
          planSelected,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      )

      .then(async (res) => {
        const responseData = res.data;
        const sessionId = responseData.data.session_id;
        const sessionUrl = responseData.data.session_url;

        window.location.href = sessionUrl;
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(`Error: ${error.response.data.message}`);
        setIsLoading(false);
      });

    // const {data, status} = response.data;
    // if (status === 200 || status === 201){
    //     toast.success('Successful')
    // }else{
    //
    //     toast.error('Error');
    // }
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-[95px]">
      {/* <ToastContainer pauseOnHover theme="colored" /> */}
      <div className="flex items-center gap-2 mt-6 sm:mt-8 mb-3 text-sm">
        <FaLock className="text-sm" />
        <div>All transactions are secure and encrypted.</div>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <button
          className="flex justify-center gap-2 items-center 
            py-2.5 w-full font-semibold text-white bg-blue-500 
            rounded-lg border border-solid shadow-sm border-[color:var(--Official-color,#507EF5)]"
          style={buttonStyle}
          type="submit"
        >
          <div className="font-inter font-medium text-base">
            Subscribe for ${selectedAmount} via
          </div>
          <FaStripe className="h-10 w-10 sm:h-14 sm:w-14" />
          {isLoading && <Loader mode="light" />}
        </button>
        <div className="mt-2 text-sm">
          <span className="text-slate-600">
            By completing this purchase you agree to our friendly{" "}
          </span>
          <span className="underline text-slate-600">privacy policy</span>
          <span className="text-slate-600">.</span>
        </div>
      </Form>
    </div>
  );
}

export default StripePayment;
