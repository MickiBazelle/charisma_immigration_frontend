import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Loader from "../../../../components/global/Loader";

function ContactUsForm({ onFormSubmit, isLoading }) {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onFormSubmit(formData);
  };

  const lableStyle = { fontSize: "0.875rem", fontWeight: "400" };
  const inputStyle = { height: "2.75rem", border: "1px solid #d0d5dd" };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-5 justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <Form.Field className="flex flex-col flex-1">
          <label
            className="text-xsm font-inter font-light leading-5"
            style={lableStyle}
          >
            First name
          </label>
          <input
            placeholder="First name"
            type="text"
            className="mt-6 text-xsm font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
            value={formData.first_name}
            {...register("first_name", { minLength: 2 })}
            onChange={handleChange}
          ></input>
        </Form.Field>
        {errors.first_name && (
          <p className="text-sm text-red-600">Enter a valid name</p>
        )}
        <Form.Field className="flex flex-col flex-1">
          <label
            className="text-xsm font-inter font-medium leading-5 text-slate-700"
            style={lableStyle}
          >
            Last name
          </label>
          <input
            className="mt-6 text-xsm font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
            placeholder="Last name"
            type="text"
            style={inputStyle}
            value={formData.last_name}
            {...register("last_name", { minLength: 2 })}
            onChange={handleChange}
          ></input>
        </Form.Field>
        {errors.last_name && (
          <p className="text-sm text-red-600">Enter a valid name</p>
        )}
      </div>
      <Form.Field>
        <label
          className="text-xsm font-inter font-medium leading-5 text-slate-700"
          style={lableStyle}
        >
          Email
        </label>
        <input
          className="mt-6 text-xsm font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
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
      </Form.Field>
      {errors.email && (
        <p className="text-sm text-red-600">Enter a valid email</p>
      )}
      <Form.Field>
        <label
          className="mt-6 text-xsm font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
          style={lableStyle}
        >
          Phone number
        </label>

        <input
          className="grow my-auto text-gray-500 text-ellipsis"
          placeholder="+1 (555) 000-0000"
          type="text"
          style={inputStyle}
          value={formData.phone_number}
          {...register("phone_number", { minLength: 10 })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      <Form.Field>
        <label
          className="mt-6 text-xsm font-inter font-medium leading-5 text-slate-700 max-md:max-w-full"
          style={lableStyle}
        >
          Message
        </label>

        <textarea
          className="grow my-auto text-gray-500 text-ellipsis"
          placeholder="Leave us a message..."
          type="text"
          {...register("message", { minLength: 5 })}
          onChange={handleChange}
        ></textarea>
      </Form.Field>
      {errors.message && (
        <p className="text-sm text-red-600">Enter a valid name</p>
      )}
      <div className="flex gap-3 justify-between mt-6 text-base leading-6 text-slate-600 max-md:flex-wrap max-md:max-w-full">
        <input
          value="test"
          type="checkbox"
          onChange={handleChange}
          className="my-auto w-5 h-5 rounded-md border border-solid border-[color:var(--Colors-Border-border-primary,#D0D5DD)]"
        />
        <div className="grow underline max-md:max-w-full">
          <span className="text-slate-600">You agree to our friendly </span>
          <span className="underline text-slate-600">privacy policy</span>
          <span className="text-slate-600">.</span>
        </div>
      </div>
      <button
        type="submit"
        className="flex justify-center gap-2 items-center 
        py-3 px-16 mt-6 max-w-full font-semibold text-white rounded-lg  w-full shadow-sm bg-gradient-to-tr from-brightViolet via-blueLotus to-neonBlue border-1 border-purpleShadeBush border-solid max-md:px-5"
      >
        <div>Send message</div>

        {isLoading === true && <Loader mode="light" />}
      </button>
    </Form>
  );
}

export default ContactUsForm;
