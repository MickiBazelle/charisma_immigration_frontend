import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import StarRating from "./StarRating";

function TestimonialForm({ onFormSubmit }) {
  const initialData = {
    client_name: "",
    client_occupation: "",
    client_location: "",
    client_message: "",
    client_rating: "",
    photo: "",
  };
  const [testimonial, setTestimonial] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({
      ...testimonial,
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
    const formData = new FormData();

    formData.append("client_name", testimonial.client_name);
    formData.append("client_occupation", testimonial.client_occupation);
    if (testimonial?.client_location){
      formData.append("client_location", testimonial.client_location);
    }
    formData.append("client_message", testimonial.client_message);
    formData.append("client_rating", testimonial.client_rating);
    if (testimonial.photo?.file) {
      formData.append("photo", testimonial.photo.file);
    }
    onFormSubmit(formData);
  };

  const handleSetRating = (rating) => {
    setRating(rating);
    setTestimonial({
      ...testimonial,
      client_rating: rating,
    });
  };

  const handleTestimonialImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTestimonial({
          ...testimonial,
          photo: {
            file: reader.result,
            preview: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="card mb-3 overflow-y-auto">
        <div className="card-header border-bottom px-4 py-3">
          <h4 className="mb-0">Client Photo</h4>
        </div>
        <div className="card-body">
          <label htmlFor="courseTHumbnail" className="form-label">
            Thumbnail Preview
          </label>
          <img
            style={{
              width: "100%",
              height: "330px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            className="mb-4"
            src={
              testimonial.photo.preview ||
              "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
            }
            alt=""
          />
          <div className="mb-3">
            <Form.Field>
              <label htmlFor="courseTHumbnail" className="form-label">
                Course Thumbnail
              </label>
              <input
                id="courseTHumbnail"
                className="form-control"
                type="file"
                name="image"
                onChange={handleTestimonialImageChange}
              />
            </Form.Field>
          </div>
          {/* <div className="mb-3">
                <label className="form-label">Course Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={ckEdtitorData}
                  onChange={handleCkEditorChange}
                  style={{ height: "400px" }}
                  name="description"
                  value={course.description || ""}
                />
                <small>A brief summary of your courses.</small>
              </div> */}
        </div>
      </div>
      <Form.Field>
        <label>Client Name</label>
        <input
          placeholder="John Doe"
          type="text"
          value={testimonial.client_name}
          {...register("client_name", { minLength: 2 })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      {errors.client_name && (
        <p className="text-sm text-red-600">Enter a valid name</p>
      )}
      <Form.Field>
        <label>Client Occupation</label>
        <input
          placeholder="Lawyer"
          type="text"
          value={testimonial.client_occupation}
          {...register("client_occupation", { minLength: 2 })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      {errors.client_occupation && (
        <p className="text-sm text-red-600">Enter a valid name</p>
      )}
      {/* <Form.Field>
        <label>Client Location</label>
        <input
          placeholder="United Kingdom"
          type="text"
          value={testimonial.client_location}
          {...register("client_location", { minLength: 2 })}
          onChange={handleChange}
        ></input>
      </Form.Field>
      {errors.client_location && (
        <p className="text-sm text-red-600">Enter a valid name</p>
      )} */}
      <StarRating rating={rating} setRating={handleSetRating} />
      <Form.Field>
        <label>Testimonial</label>
        <textarea
          placeholder="Testimonial message..."
          type="text"
          value={testimonial.client_message}
          {...register("client_message", {
            minLength: 5,
          })}
          onChange={handleChange}
        ></textarea>
      </Form.Field>

      <Button primary type="submit">
        Add Testimonial
      </Button>
    </Form>
  );
}

export default TestimonialForm;
