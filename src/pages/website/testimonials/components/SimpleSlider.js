import React, { useState, forwardRef } from "react";
import Slider from "react-slick";
import { IoStar } from "react-icons/io5";
import { Img } from "../../../../components/website/Img";
import blankPic from "../../../../assets/imgs/blank_pic.png";
import axiosInstance from "../../../../axios";
import config from "../../../../config";

export const SimpleSlider = forwardRef((props, ref) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const { testimonials, isLoading } = props;

  var settings = {
    dots: false,
    infinite: testimonials.length <= 1 ? false : true,
    // fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChahange: (current, next) => setSlideIndex(next),
  };
  const photoUrl = config.imageUrl.replace(/\/$/, "");
  testimonials.map((testimonial) => {
    return testimonial;
  });

  return (
    <Slider
      ref={ref}
      {...settings}
      className="bg-blueberry w-full"
      style={{ height: "32.5rem" }}
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="mt-24 px-28" style={{}}>
          <div className="flex justify-start">
            <div>
              <div
                className="h-80 w-80 bg-white rounded"
                style={{
                  marginRight: "7.5rem",
                  height: "20.5rem",
                  width: "20.5rem",
                }}
              >
                <img
                  src={photoUrl + testimonial.photo}
                  alt=""
                  className="absolute h-80 w-80 mt-1 ml-1 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex space-x-1  text-honeyWax">
                {Array.from({ length: testimonial.client_rating }).map(
                  (_, index) => (
                    <IoStar key={index} className="w-5 h-5" />
                  )
                )}
              </div>
              <div className="mt-6 text-ghostWhite font-inter font-medium text-xl tracking-wide leading-tight">
                {testimonial.client_message}
              </div>
              <div className="mt-8 text-smb text-ghostWhite font-inter font-semibold">
                — {testimonial.client_name}, {testimonial.client_location}
              </div>
              <div
                className="mt-3 text-sm font-inter font-light"
                style={{ color: "#D2D2D2" }}
              >
                {testimonial.client_occupation}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
});
