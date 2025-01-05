import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function AdminLoginForm({ onFormSubmit }) {
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
    onFormSubmit(formData);
  };
  return (
    <div class="mt-8 w-full">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
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
        <Button
          type="submit"
          primary
          className="justify-center items-center px-16 py-2.5 mt-6 max-w-full font-semibold text-white bg-blue-500 rounded-lg border border-solid shadow-sm border-[color:var(--Official-color,#507EF5)] w-[360px] max-md:px-5"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
