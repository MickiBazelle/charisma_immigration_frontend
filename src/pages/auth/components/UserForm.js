import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../axios";
import submitCharismaForm from "../../../utils/submitForm";

function UserForm({ onFormSubmit }) {
  const initialData = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = (data) => {
    onFormSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First name"
          type="text"
          value={formData.first_name}
          {...register("first_name", { minLength: 2 })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      {errors.first_name && (
        <p className="text-sm text-red-600">Enter a valid name</p>
      )}
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last name"
          type="text"
          value={formData.last_name}
          {...register("last_name", { minLength: 2 })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      {errors.last_name && (
        <p className="text-sm text-red-600">Enter a valid name</p>
      )}
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
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
        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          value={formData.password}
          {...register("password", {
            required: true,
            pattern: /^(?=.*\d).{6,}$/,

            ///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
          })}
          onChange={handleChange}
        />
      </Form.Field>
      {errors.password && (
        <p className="text-sm text-red-600">Enter a valid password</p>
      )}
      <Form.Field>
        <label>Confirm password</label>
        <input
          placeholder=""
          type="password"
          value={formData.password2}
          {...register("password2", {
            required: true,
            validate: (val) => {
              if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      {errors.password && (
        <p className="text-sm text-red-600">Passwords do not match</p>
      )}
      <Button primary type="submit">
        Add User
      </Button>
    </Form>
  );
}

export default UserForm;
