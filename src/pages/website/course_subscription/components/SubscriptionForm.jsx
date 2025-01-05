import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Loader from "../../../../components/global/Loader";
import creditCard from "../../../../assets/imgs/website/credit_card.png";
import mastercard from "../../../../assets/imgs/website/mastercard.png";
import mail from "../../../../assets/imgs/website/mail.png";
import visa from "../../../../assets/imgs/website/visa.png";
import americanExpress from "../../../../assets/imgs/website/amex.png";
import alipay from "../../../../assets/imgs/website/alipay.png";
import { Img } from "../../../../components/website/Img";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

function SubScriptionForm({ onFormSubmit, isLoading }) {
  const navigate = useNavigate();
  const initialData = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialData);
  //   const [isLoading, setIsLoading] = useState(false);
  const buttonStyle = {
    height: "54px",
  };

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
    onFormSubmit(formData);
  };

  const handleSubscriptionClick = () => {
    navigate("/user/dashboard/");
  };

  const lableStyle = { fontSize: "0.875rem", fontWeight: "400" };
  const inputStyle = { height: "2.75rem", border: "1px solid #d0d5dd" };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-4 sm:mx-8 md:mx-[95px] mt-8 sm:mt-16"
    >
      <Form.Field>
        <label
          className="text-sm font-inter font-medium leading-5 text-slate-700"
          style={lableStyle}
        >
          Email address
        </label>

        <input
          className="mt-2 w-full text-sm font-inter font-normal leading-5 text-slate-700"
          placeholder="billing@gmail.com"
          type="email"
          style={{ ...inputStyle, width: "100%" }}
          value={formData.email}
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          onChange={handleChange}
        />
      </Form.Field>
      {errors.email && (
        <p className="text-sm text-red-600">Enter a valid email</p>
      )}
      <Form.Field>
        <label
          className="mt-4 text-sm font-inter font-normal leading-5 text-slate-700"
          style={lableStyle}
        >
          Card number
        </label>

        <input
          className="mt-2 w-full text-sm font-inter font-normal leading-5 text-gray-500 text-ellipsis"
          placeholder="1234 1234 1234 1234"
          type="text"
          style={{ ...inputStyle, width: "100%" }}
          value={formData.phone_number}
          {...register("phone_number", { minLength: 10 })}
          onChange={handleChange}
        />
      </Form.Field>
      <div className="flex flex-col sm:flex-row gap-5 justify-between mt-2">
        <Form.Field className="flex-1">
          <label
            className="text-sm font-inter font-light leading-5"
            style={lableStyle}
          >
            Expiry date
          </label>
          <input
            placeholder="MM / YY"
            type="text"
            className="mt-2 w-full text-sm font-inter font-normal leading-5 text-slate-700"
            style={{ ...inputStyle, width: "100%" }}
            value={formData.first_name}
            {...register("first_name", { minLength: 2 })}
            onChange={handleChange}
          />
        </Form.Field>
        {errors.first_name && (
          <p className="text-sm text-red-600">Enter a valid name</p>
        )}
        <Form.Field className="flex-1 sm:mt-0">
          <label
            className="text-sm font-inter font-medium leading-5 text-slate-700"
            style={lableStyle}
          >
            CVV
          </label>
          <input
            className="mt-2 w-full text-sm font-inter font-normal leading-5 text-slate-700"
            placeholder="CVV"
            type="text"
            style={{ ...inputStyle, width: "100%" }}
            value={formData.last_name}
            {...register("last_name", { minLength: 2 })}
            onChange={handleChange}
          />
        </Form.Field>
        {errors.last_name && (
          <p className="text-sm text-red-600">Enter a valid name</p>
        )}
      </div>
      <Form.Field>
        <label
          className="mt-4 text-sm font-inter font-normal leading-5 text-slate-700"
          style={lableStyle}
        >
          Cardholder name
        </label>

        <input
          className="mt-2 w-full text-sm font-inter font-normal leading-5 text-gray-500 text-ellipsis"
          placeholder="Jane More Doe"
          type="text"
          style={{ ...inputStyle, width: "100%" }}
          value={formData.phone_number}
          {...register("phone_number", { minLength: 10 })}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label
          className="mt-4 text-sm font-inter font-normal leading-5 text-slate-700"
          style={lableStyle}
        >
          Discount code
        </label>

        <input
          className="mt-2 w-full text-sm font-inter font-normal leading-5 text-gray-500 text-ellipsis"
          type="text"
          style={{ ...inputStyle, width: "100%" }}
          value={formData.phone_number}
          {...register("phone_number", { minLength: 10 })}
          onChange={handleChange}
        />
      </Form.Field>
      <div className="mt-8 text-slate-600">
        <div className="flex justify-between font-inter font-normal">
          <div>Subtotal</div>
          <div>$25.00</div>
        </div>
        <div className="mt-4 flex items-baseline justify-between font-inter font-normal">
          <div className="font-semibold text-base">Total</div>
          <div className="font-semibold text-base">$25.00</div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-8 mb-3">
        <FaLock />
        <div className="text-sm">
          All transactions are secure and encrypted.
        </div>
      </div>
      <button
        className="flex justify-center gap-2 items-center 
        py-2.5 w-full font-semibold text-white bg-blue-500 
        rounded-lg border border-solid shadow-sm border-[color:var(--Official-color,#507EF5)]"
        style={{ ...buttonStyle, width: "100%" }}
        onClick={handleSubscriptionClick}
      >
        <div className="font-inter font-medium text-base sm:text-lg">
          Subscribe for $25
        </div>
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
  );
}

export default SubScriptionForm;
