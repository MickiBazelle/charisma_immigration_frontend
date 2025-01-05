import React, { useState } from "react";
import { Img } from "./Img";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

function WebsiteFooter() {
  const initialData = { email: "" };
  const [formData, setFormData] = useState(initialData);
  //     const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEmailSubmit = async (formData) => {
    // await axiosInstance
    //   .post(`/accounts/login/`, formData)
    //   .then((res) => {
    //     const { token, refresh_token } = res.data;
    //     localStorage.clear();
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("refresh_token", refresh_token);
    //     navigate("/accounts/dashboard/");
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       setResponse(error.response);
    //       setAlertClose(false);
    //
    //
    //     }
    //   });
  };

  const onSubmit = (data) => {
    handleEmailSubmit(formData);
  };

  return (
    <div className="flex flex-col w-full bg-footerColor px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col w-full md:w-2/3">
            <div className="flex flex-col items-start">
              <div className="flex gap-2.5 text-white whitespace-nowrap">
                <Img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eec2fc2c2f956f2f274a1fe068c675a97805c5d9e0771d7b0d7acfa75ee0b68?apiKey=c9788533178a4027a387d37dd621471a&"
                  className="shrink-0 aspect-square w-[27px]"
                />
                <div
                  className="text-base font-normal font-poppins"
                  style={{
                    fontStretch: "normal",
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: "16px",
                    lineHeight: "1.5",
                  }}
                >
                  CharismaImmigrations
                </div>
              </div>
              <div
                className="mt-4 md:mt-8 leading-6 text-base tracking-wide font-normal font-inter text-neutral-400"
                style={{
                  fontStretch: "normal",
                  fontStyle: "normal",
                  fontWeight: "300",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              >
                <span className="text-red-600">Disclaimer</span>: Charisma
                Immigration Services is not an attorney and under no
                circumstance do we claim we are immigration attorneys. We are
                paralegals with in depth experience in USCIS employment and
                family based petitions. We assist clients put together
                convincing EB2NIW petitions and other student and individual
                visa form assistance. No interaction or transaction with our
                firm should be misconstrued as formal legal representation or
                advice.
              </div>
              <div className="flex flex-wrap gap-4 mt-4 md:mt-8 font-semibold text-neutral-400">
                <div>Home</div>
                <div>Services</div>
                <div>About us</div>
                <div>Testimonials</div>
                <div>Course</div>
                <div>Contact us</div>
                <div>Terms</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3">
            <div className="flex flex-col justify-center">
              <div className="text-sm font-inter font-semibold leading-5 text-neutral-100">
                Stay up to date
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col sm:flex-row w-full gap-4"
                >
                  <Form.Field className="flex-grow">
                    <input
                      placeholder="Enter your email"
                      type="email"
                      className="w-full px-3.5 h-[44px] bg-gray-900 rounded-lg border text-ellipsis text-zinc-500"
                      value={formData.email}
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#0c111d",
                        borderRadius: "8px",
                        borderColor: "red",
                      }}
                    />
                  </Form.Field>
                  <button className="w-full sm:w-auto px-4 h-[44px] font-semibold text-white whitespace-nowrap bg-blue-500 rounded-lg border border-violet-500 border-solid shadow-sm">
                    Subscribe
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col pt-8 border-t border-gray-800 border-solid">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-sm font-inter leading-6 text-neutral-400 text-center sm:text-left">
              © 2024 Charisma Immigrations LLC. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51349a647519a270c51c49a4fba6c8982d516d2f9abf052dce28f0f9ac5425dd?apiKey=c9788533178a4027a387d37dd621471a&"
                className="shrink-0 w-6 aspect-square"
              />
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/53df5b53e263b8436d204b397f0d964b31bd7b7d6655da05ece1a8ed27ba7c3f?apiKey=c9788533178a4027a387d37dd621471a&"
                className="shrink-0 w-6 aspect-square"
              />
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f779bf485db22772a85c01ac5a29cd0034a064e056eb66e1b6f647d1efffdb6a?apiKey=c9788533178a4027a387d37dd621471a&"
                className="shrink-0 w-6 aspect-square"
              />
              <Img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f85a034d6ee87cc5a759bd4e3bb2809314b98bd1c012d7dc5ff006e6bd4e745?apiKey=c9788533178a4027a387d37dd621471a&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteFooter;
