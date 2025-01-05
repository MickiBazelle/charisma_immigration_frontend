import WebsiteFooter from "../../../components/website/Footer";
import CharismaImmigrationsHeader from "../../../components/website/navbar/CharismaImmigrationsHeader";
import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { SimpleSlider } from "./components/SimpleSlider";
import { TestimonialPagination } from "./components/TestimonialPagination";
import axiosInstance from "../../../axios";

function Testimonials() {
  const [isLoading, setIsLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [totalPages, setTotalPages] = useState([1]);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    await axiosInstance
      .get("testimonials/")
      .then((res) => {
        const returnedTestimonials = [];
        const mData = res.data.data;
        for (const key in mData) {
          const testimonial = {
            id: key,
            ...mData[key],
          };
          returnedTestimonials.push(testimonial);
        }
        setIsLoading(false);
        setTotalPages(returnedTestimonials.length);
        setTestimonials(returnedTestimonials);
      })
      .catch((error) => {
        setIsLoading(false);
        
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const sliderRef = useRef({});
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(page - 1);
    }
  };
  const next = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    handlePageChange(nextPage);
    // if (sliderRef.current) {
    //   
    //   sliderRef.current.slickNext();
    // }
  };

  const previous = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    handlePageChange(prevPage);
    // if (sliderRef.current) {
    //   
    //   sliderRef.current.slickPrev();
    // }
  };
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full px-[55px]">
          <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-16 py-4 text-base leading-6 max-md:px-5 max-md:max-w-full">
              <CharismaImmigrationsHeader />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center px-20 py-12 mt-4 w-full font-semibold text-center bg-white max-md:px-5 max-md:max-w-full">
          <div className="text-SM font-inter leading-6 text-blue-500 max-md:mt-10 max-md:max-w-full">
            TESTIMONIALS
          </div>
          <div className="mt-3 text-3xl font-inter tracking-wide text-gray-900 leading-[60px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            Don’t take our word for it.
          </div>
          <div className="text-base mt-2 font-inter tracking-wide font-light leading-8 text-slate-600 w-[768px] max-md:mb-10 max-md:max-w-full">
            Hear from our amazing customers all over the world
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 w-full bg-gray-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center items-center w-full max-md:px-5 max-md:my-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-full">
              <SimpleSlider
                ref={sliderRef}
                testimonials={testimonials}
                isLoading={isLoading}
              />
              <div className="mt-12 border-t border-t-gray-200 h-1 mx-28"></div>
              <div className="flex mx-28 items-center justify-between mt-4 mb-32">
                <button
                  className="border border-gray-200 w-28 h-9"
                  onClick={previous}
                >
                  Previous
                </button>
                <TestimonialPagination
                  totalPages={testimonials.length}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
                <button
                  className="border border-gray-200 w-20 h-9"
                  onClick={next}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WebsiteFooter />
    </div>
  );
}

export default Testimonials;
