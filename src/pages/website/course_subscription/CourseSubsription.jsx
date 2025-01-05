import React, { useState } from "react";
import { Img } from "../../../components/website/Img";
import { Link } from "react-router-dom";
import WebsiteFooter from "../../../components/website/Footer";
import { IoStar } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import layers from "../../../assets/imgs/website/layers.png";
import "./subscription.css";
import { Form } from "semantic-ui-react";
import SubScriptionForm from "./components/SubscriptionForm";
import WebsiteLogo from "../../../components/website/WebsiteLogo";
import PaymentOption from "./components/PaymentOption";
import { FaCreditCard } from "react-icons/fa";
import StripePayment from "./components/StripePayment";
import { FaPaypal } from "react-icons/fa";
import PaypalPayment from "./components/PaypalPayment";

function CourseSubsription() {
  const navigate = useNavigate();
  const [planSelected, setPlanSelected] = useState("basic");
  const [amountSelected, setAmountSelected] = useState("10");
  const [selectedPaymentOption, setselectedPaymentOption] = useState("stripe");
  const onBackToHomepageClick = () => {
    navigate("/");
  };

  const onRadioClicked = (value) => {
    setPlanSelected(value);
    if (value === "basic") {
      setAmountSelected("10");
    } else {
      setAmountSelected("25");
    }
  };

  const onPaymentOptionClicked = (value) => {
    setselectedPaymentOption(value);
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-4 sm:px-8 md:px-[106px] pt-4 text-base leading-6">
              <WebsiteLogo />
            </div>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="col-span-1 bg-water h-fit px-4 sm:px-8 md:px-[75px] pt-8 md:pt-[87px]">
                <div
                  className="font-inter font-semibold text-2xl md:text-3xl"
                  style={{ lineHeight: "1.5" }}
                >
                  Everything you need to know about immigration course
                </div>
                <iframe
                  className="mt-5 w-full h-[200px] sm:h-[300px] md:h-[22rem] rounded-lg"
                  src="https://www.youtube.com/embed/sMB2MNP-vkA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div
                  className="flex flex-wrap items-center mt-6 md:mt-9 gap-2"
                  style={{ fontSize: "14px" }}
                >
                  <div className="text-smb font-inter">
                    #1 in depth immigration course with 2000+
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, index) => (
                      <IoStar style={{ width: "16px", height: "15.5px" }} />
                    ))}
                  </div>
                  <div className="text-smb font-inter">ratings</div>
                </div>
                <div
                  className="font-inter mt-3 font-sm font-light"
                  style={{ fontSize: "14px", lineHeight: "1.8" }}
                >
                  Lorem ipsum dolor sit amet consectetur. Et quis aliquam montes
                  sed quis eu at. Amet at volutpat leo dui diam nisl augue in ut
                  ipsum.
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-24">
                  <div
                    className="text-xs underline-offset font-inter cursor-pointer font-normal text-dodgerBlue"
                    style={{ fontSize: "14px" }}
                    onClick={onBackToHomepageClick}
                  >
                    Back to homepage
                  </div>
                  <div
                    className="text-xs underline-offset font-inter cursor-pointer font-normal text-dodgerBlue"
                    style={{ fontSize: "14px" }}
                  >
                    FAQs
                  </div>
                </div>
                <div className="mt-8 md:mt-12">
                  <div
                    className={`h-auto w-full ${
                      planSelected === "basic"
                        ? "bg-gradient-to-tr p-[2px] bg-white from-brightViolet via-blueLotus to-neonBlue"
                        : "border p-[2px]"
                    }   rounded-xl`}
                  >
                    <div className="flex flex-col h-full bg-white rounded-xl">
                      <div
                        className={`h-16 ${
                          planSelected === "basic"
                            ? "border-b-[2px] border-brightViolet"
                            : "border-b-[1px] border-dawnPink"
                        } p-[2px]`}
                      >
                        <div className="flex items-center justify-between mt-[10px] mx-[16px]">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center h-[32px] w-[32px] bg-blueLight rounded-full ">
                              <div className="h-[16px] w-[16px]">
                                <Img src={layers} />
                              </div>
                            </div>
                            <div className="ml-3 text-sm font-semibold font-inter">
                              Basic plan
                            </div>
                          </div>

                          <input
                            type="radio"
                            className="form-radio h-5 w-5"
                            name="radio-group"
                            value="basic"
                            onClick={() => onRadioClicked("basic")}
                            checked={planSelected === "basic"}
                          />
                        </div>
                      </div>
                      <div className="mt-2 ml-[16px]">
                        <div className="mt-2 bg-white shadow-spread w-[145px] h-[24px] rounded-md">
                          <div className="flex items-center gap-2 pl-3">
                            <div className="w-[8px] h-[8px] rounded-full bg-grassGreen"></div>
                            <div
                              className="font-inter font-medium"
                              style={{ fontSize: "14px" }}
                            >
                              Limited time only
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-baseline gap-1">
                          <span
                            className="font-inter font-semibold"
                            style={{ fontSize: "24px" }}
                          >
                            $10
                          </span>{" "}
                          per month
                        </div>
                        <div className="mt-2 mb-3 font-inter font-light text-sm">
                          Includes videos on a monthly basis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-8 md:mb-12 mt-3">
                  <div
                    className={`h-auto w-full 
                    ${
                      planSelected === "premium"
                        ? "bg-gradient-to-tr p-[2px] from-brightViolet via-blueLotus to-neonBlue bg-white"
                        : "border p-[2px]"
                    }
                      rounded-xl`}
                  >
                    <div className="flex flex-col h-full bg-white rounded-xl">
                      <div
                        className={`h-16 ${
                          planSelected === "premium"
                            ? "border-b-[2px] border-brightViolet"
                            : "border-b-[1px] border-dawnPink"
                        } p-[2px]`}
                      >
                        <div className="flex items-center justify-between mt-[10px] mx-[16px]">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center h-[32px] w-[32px] bg-blueLight rounded-full ">
                              <div className="h-[16px] w-[16px]">
                                <Img src={layers} />
                              </div>
                            </div>
                            <div className="ml-3 text-sm font-semibold font-inter">
                              Business plan
                            </div>
                          </div>

                          <input
                            type="radio"
                            className="form-radio h-5 w-5"
                            name="radio-group"
                            value="premium"
                            onClick={() => onRadioClicked("premium")}
                            checked={planSelected === "premium"}
                          />
                        </div>
                      </div>
                      <div className="mt-2 ml-[16px]">
                        <div className="mt-4 flex items-baseline gap-1">
                          <span
                            className="font-inter font-semibold"
                            style={{ fontSize: "24px" }}
                          >
                            $25
                          </span>{" "}
                          per month
                        </div>
                        <div className="mt-2 mb-3 font-inter font-light text-sm">
                          Includes videos on a monthly basis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 px-4 sm:px-8 md:px-[75px]">
                <div
                  className="flex justify-center font-inter font-semibold text-2xl md:text-3xl"
                  style={{ lineHeight: "1.5" }}
                >
                  Payment method
                </div>
                <div className="pt-[30px] md:pt-[50px]"></div>
                <div className="space-y-4 sm:mb-[50px]">
                  <PaymentOption
                    icon={<FaCreditCard />}
                    name={"Stripe"}
                    onOptionSelected={() => onPaymentOptionClicked("stripe")}
                    isSelected={selectedPaymentOption === "stripe"}
                    child={
                      <div>
                        <StripePayment
                          planSelected={planSelected}
                          selectedAmount={amountSelected}
                        />
                      </div>
                    }
                  />
                  <PaymentOption
                    icon={<FaCreditCard />}
                    name={"Card"}
                    onOptionSelected={() => onPaymentOptionClicked("card")}
                    isSelected={selectedPaymentOption === "card"}
                    child={
                      <div>
                        <SubScriptionForm />
                      </div>
                    }
                  />
                  <PaymentOption
                    icon={<FaPaypal />}
                    name={"Paypal"}
                    onOptionSelected={() => onPaymentOptionClicked("paypal")}
                    isSelected={selectedPaymentOption === "paypal"}
                    child={
                      <div>
                        <PaypalPayment />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <WebsiteFooter />
      </div>
    </div>
  );
}

export default CourseSubsription;
