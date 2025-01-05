import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../axios";
import submitCharismaForm from "../../utils/submitForm";

function CategoryForm({ onFormSubmit }) {
  const initialData = { title: "", description: "" };
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
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   submitForm();
  // };

  const onSubmit = (data) => {
    // onFormSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Category title"
          type="text"
          value={formData.title}
          {...register("title", { minLength: 5 })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <textarea
          placeholder="Description of category"
          type="text"
          value={formData.description}
          {...register("description", {
            minLength: 10,
          })}
          onChange={handleChange}
        ></textarea>
      </Form.Field>
      <Button primary type="submit">
        Add Category
      </Button>
    </Form>
  );
}

export default CategoryForm;
