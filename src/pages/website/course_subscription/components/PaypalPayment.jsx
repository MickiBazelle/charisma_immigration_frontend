import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Loader } from "semantic-ui-react";
import { FaLock } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

function PaypalPayment({ onFormSubmit, isLoading }) {
  const navigate = useNavigate();
  const handleSubscriptionClick = () => {
    navigate("/user/dashboard/");
  };

  const buttonStyle = {
    height: "54px",
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-[95px]">
      <ToastContainer pauseOnHover theme="colored" />
      <div className="flex items-center gap-2 mt-6 sm:mt-8 mb-3 text-sm">
        <FaLock className="text-sm" />
        <div>All transactions are secure and encrypted.</div>
      </div>
      <Form>
        <button
          className="flex justify-center gap-2 items-center 
                py-2.5 w-full font-semibold text-white bg-blue-500 
                rounded-lg border border-solid shadow-sm border-[color:var(--Official-color,#507EF5)]"
          style={buttonStyle}
          type="submit"
        >
          <div className="font-inter font-medium text-base">
            Subscribe for $25 via
          </div>
          {/* <FaStripe className="h-10 w-10 sm:h-14 sm:w-14" /> */}
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

export default PaypalPayment;
