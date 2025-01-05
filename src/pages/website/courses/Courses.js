import WebsiteFooter from "../../../components/website/Footer";
import CharismaImmigrationsHeader from "../../../components/website/navbar/CharismaImmigrationsHeader";
import clock from "../../../assets/imgs/website/clock.png";
import bar from "../../../assets/imgs/website/bar.png";
import play from "../../../assets/imgs/website/play.png";
import file from "../../../assets/imgs/website/file.png";
import check from "../../../assets/imgs/website/check.png";
import video_recorder from "../../../assets/imgs/website/video_recorder.png";
import hand_drawn from "../../../assets/imgs/website/hand_drawn.png";
import star from "../../../assets/imgs/website/star.png";
import React from "react";
import CourseOverviewItem from "./components/CourseOverviewItem";
import { Img } from "../../../components/website/Img";
import { useNavigate } from "react-router-dom";
import CoursesCollapsableFAQItem from "./components/CoursesCollapsableFAQItem";

function LearningItem({ fontSize = "18px" }) {
  return (
    <div className="flex mt-5 items-center gap-3">
      <Img className="w-[28px] h-[28px]" src={check} />
      <div
        className="text-riverBed font-light font-inter"
        style={{ fontSize: "18px" }}
      >
        Lorem ipsum dolor sit amet consectetur. Tempus.
      </div>
    </div>
  );
}

function BasicPlans({ fontSize = "18px" }) {
  return (
    <div className="flex mt-4 gap-3">
      <Img className="w-[28px] h-[28px]" src={check} />
      <div
        className="text-riverBed font-light font-inter"
        style={{ fontSize: "16px" }}
      >
        Lorem ipsum dolor sit amet consectetur.
      </div>
    </div>
  );
}

function CourseContent({ title }) {
  return (
    <div className="flex mt-5 gap-3">
      <Img className="w-[28px] h-[28px]" src={check} />
      <div
        className="text-riverBed font-light font-inter mt-1"
        style={{ fontSize: "18px" }}
      >
        {title}
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="flex items-center gap-2 mt-3">
            <Img className="w-[16.7px] h-[11.7px]" src={video_recorder} />
            <div
              className="text-riverBed font-light font-inter"
              style={{ fontSize: "16px" }}
            >
              Lorem ipsum dolor sit amet consectetur. Tempus.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Courses() {
  const navigate = useNavigate();

  const handleSubscriptionOnClick = () => {
    navigate("/course/subscription");
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full px-[55px]">
          <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-16 py-4 text-base leading-6 max-md:px-5 max-md:max-w-full">
              <CharismaImmigrationsHeader />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 font-inter font-semibold">
        <div className="md:grid md:grid-cols-3 sm:mx-4 md:mx-36">
          <div className="col-span-2">
            <div>
              <div
                className="font-inter font-semibold text-black"
                style={{ fontSize: "40px", lineHeight: "1.5" }}
              >
                Everything you need to know about Immigration course
              </div>
              <div
                className="text-riverBed text-lg font-inter font-light leading-7 mt-4"
                style={{ fontSize: "18px", lineHeight: "1.65" }}
              >
                Lorem ipsum dolor sit amet consectetur. Et quis aliquam montes
                sed quis
                <br /> eu at. Amet at volutpat leo dui diam nisl augue in ut
                ipsum.
              </div>
              <div
                className="flex mt-4 gap-2 font-inter font-normal text-riverBed"
                style={{ fontSize: "16px" }}
              >
                <div>5.0</div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Img
                      key={index}
                      className=""
                      src={star}
                      style={{ width: "20px", height: "19.5px" }}
                    />
                  ))}
                </div>
                <div
                  className="text-dodgerBlue font-inter font-light pl-1"
                  style={{ fontSize: "16px" }}
                >
                  (6000 ratings)
                </div>
                <div
                  className="text-riverBed font-inter font-light pl-1 "
                  style={{ fontSize: "16px" }}
                >
                  300 students
                </div>
              </div>
              <div className="mt-[18px]">
                <div className="flex">
                  <div
                    className="text-riverBed font-inter font-light pl-1 "
                    style={{ fontSize: "16px" }}
                  >
                    Created by
                  </div>
                  <div
                    className="text-dodgerBlue font-inter font-light pl-1"
                    style={{ fontSize: "16px" }}
                  >
                    Daniel Surname
                  </div>
                </div>
                <button
                  className="flex mt-[24px] gap-1 justify-center items-center self-start
                leading-6 text-white whitespace-nowrap rounded-xl 
                 shadow-sm bg-gradient-to-tr from-brightViolet via-blueLotus 
                  to-neonBlue border-1 border-purpleShadeBush border-solid
                  "
                  style={{ width: "194px", height: "44px" }}
                  onClick={handleSubscriptionOnClick}
                >
                  <div
                    className="font-semibold font-inter"
                    style={{ fontSize: "16px" }}
                  >
                    Subscribe for $10/m
                  </div>
                </button>
                <div className="flex gap-2 items-center mt-3">
                  <div className="h-[1px] w-9 bg-riverBed"></div>
                  <div
                    className="text-riverBed font-inter font-light pl-1 "
                    style={{ fontSize: "16px" }}
                  >
                    or
                  </div>
                  <div className="h-[1px] w-9 bg-riverBed"></div>
                </div>
                <button
                  className="flex mt-[18px] gap-1 justify-center items-center self-start
                leading-6 text-white whitespace-nowrap rounded-xl 
                 shadow-sm bg-dodgerBlue hover:purpleShadeBush border-solid
                  "
                  style={{ width: "127px", height: "44px" }}
                >
                  <div
                    className="font-semibold font-inter"
                    style={{ fontSize: "16px" }}
                  >
                    Buy for $25
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="md:mt-0 md:col-span-1 items-center grow">
            <iframe
              className="sm:mt-[50px] md:mt-0 w-full md:w-[363px] h-[213px] rounded-lg"
              src="https://www.youtube.com/embed/sMB2MNP-vkA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="flex justify-center my-4">
              <div
                className="text-xs underline-offset font-inter cursor-pointer font-normal text-dodgerBlue"
                style={{ fontSize: "16px" }}
              >
                Preview this course
              </div>
            </div>
            <div
              className="font-semibold font-inter"
              style={{ marginTop: "24px", fontSize: "18px" }}
            >
              Course Overview
            </div>
            <div>
              <CourseOverviewItem icon={bar} label="Beginner Friendly" />
              <CourseOverviewItem icon={play} label="12 hours of HD video" />
              <CourseOverviewItem icon={file} label="10 lessons" />
              <CourseOverviewItem icon={clock} label="Learn at your own pace" />
            </div>
          </div>
        </div>
        <div className="bg-alabaster">
          <div className="sm:mx-4 md:mx-36">
            <div className="text-2xl pt-5">What you'll learn</div>
            <div className="md:grid md:grid-cols-2">
              <div className="col-span-1 md:mb-14">
                {Array.from({ length: 5 }, (_, index) => (
                  <LearningItem key={index} />
                ))}
              </div>
              <div className="col-span-1 mb-14">
                <div className="flex flex-col md:items-end">
                  {Array.from({ length: 5 }, (_, index) => (
                    <LearningItem key={index} />
                  ))}
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
        <div className="flex-grow mt-5">
          <div className="">
            <div className="ml-5 md:ml-36 text-2xl">Course Content</div>
            <div className="md:grid md:grid-cols-2">
              <div className="ml-5 sm:mr-10 md:mr-0 md:ml-36 col-span-1">
                <CourseContent title="Chapter One" />
                <CourseContent title="Chapter Two" />
                <CourseContent title="Chapter Three" />
                <CourseContent title="Chapter Four" />
              </div>
              <div className="mt-5 md:mt-0 md:mr-32 col-span-1">
                <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-[32px]">
                  <div className="sm:mx-4 md:mx-0 col-span-1 bg-white shadow-spread rounded-xl">
                    <div className="absolute">
                      <div className="flex">
                        <Img
                          className="ml-56 mt-[-30px] w-[58.5px] h-[53.3px] object-fill"
                          src={hand_drawn}
                        ></Img>
                        <div className="mt-[-35px] text-dodgerBlue">
                          Most popular!
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-12 mx-4">
                      <div className="font-inter" style={{ fontSize: "44px" }}>
                        $10/mth
                      </div>
                      <div
                        className="mt-5 font-inter"
                        style={{ fontSize: "20px" }}
                      >
                        Billed Plan
                      </div>{" "}
                      <div
                        className="mt-4 font-inter font-normal text-riverBed"
                        style={{ fontSize: "16px" }}
                      >
                        Billed monthly
                      </div>{" "}
                      {Array.from({ length: 5 }, (_, index) => (
                        <BasicPlans key={index} />
                      ))}
                      <button className="mt-12 text-sm font-normal font-inter  mb-10 bg-dodgerBlue text-white h-12 w-full rounded-xl">
                        Getting Started
                      </button>
                    </div>
                  </div>

                  <div className="sm:mt-5 md:mt-0 sm:mx-4 md:mx-0 col-span-1 bg-white shadow-spread rounded-xl">
                    <div className="flex flex-col items-center mt-12 mx-4">
                      <div className="font-inter" style={{ fontSize: "44px" }}>
                        $10/mth
                      </div>
                      <div
                        className="mt-5 font-inter"
                        style={{ fontSize: "20px" }}
                      >
                        Business Plan
                      </div>{" "}
                      <div
                        className="mt-4 font-inter font-normal text-riverBed"
                        style={{ fontSize: "16px" }}
                      >
                        Billed monthly
                      </div>{" "}
                      {Array.from({ length: 5 }, (_, index) => (
                        <BasicPlans key={index} />
                      ))}
                      <button className="mt-12 text-sm font-normal font-inter  mb-10 bg-dodgerBlue text-white h-12 w-full rounded-xl">
                        Getting Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow mt-[6.1rem] sm:mx-4 md:mx-36">
          <div className="md:grid md:grid-cols-2">
            <div className="md:col-span-1">
              <div
                className="text-dodgerBlue font-inter font-semibold"
                style={{ fontSize: "16px" }}
              >
                Support
              </div>
              <div
                className="mt-4 font-inter font-semibold"
                style={{ fontSize: "36px" }}
              >
                FAQs
              </div>
              <div className="" style={{ marginTop: "24px" }}>
                <div
                  className="font-inter font-light"
                  style={{ fontSize: "18px", lineHeight: "1.56" }}
                >
                  Everything you need to know about the product and billing.
                  Can’t <br />
                  find the answer you’re looking for?. Please{" "}
                  <span className="font-inter underline-offset text-dodgerBlue font-light">
                    chat to our friendly team.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-1 pl-4 sm:mt-12 md:mt-0 md:pl-8 mb-20">
              <CoursesCollapsableFAQItem
                question="Is there a free trial available?"
                addBorder={false}
                answer="
            Yes, you can try us for free for 30 days. 
            If you want, we’ll provide you with a free, 
            personalized 30-minute onboarding call to get you up and running as soon as possible.
            "
              />
              <CoursesCollapsableFAQItem
                question="Can I change my plan later?"
                addBorder={false}
                answer="
            Yes, you can try us for free for 30 days. 
            If you want, we’ll provide you with a free, 
            personalized 30-minute onboarding call to get you up and running as soon as possible.
            "
              />
              <CoursesCollapsableFAQItem
                question="What is your cancellation policy?"
                addBorder={false}
                answer="
            Yes, you can try us for free for 30 days. 
            If you want, we’ll provide you with a free, 
            personalized 30-minute onboarding call to get you up and running as soon as possible.
            "
              />
              <CoursesCollapsableFAQItem
                question="Can other info be added to an invoice?"
                addBorder={false}
                answer="
            Yes, you can try us for free for 30 days. 
            If you want, we’ll provide you with a free, 
            personalized 30-minute onboarding call to get you up and running as soon as possible.
            "
              />
              <CoursesCollapsableFAQItem
                question="How does billing work?"
                addBorder={false}
                answer="
            Yes, you can try us for free for 30 days. 
            If you want, we’ll provide you with a free, 
            personalized 30-minute onboarding call to get you up and running as soon as possible.
            "
              />
              <CoursesCollapsableFAQItem
                question="How do I change my account email?"
                addBorder={false}
                answer="
            Yes, you can try us for free for 30 days. 
            If you want, we’ll provide you with a free, 
            personalized 30-minute onboarding call to get you up and running as soon as possible.
            "
              />
            </div>
          </div>
        </div>
      </div>

      <WebsiteFooter />
    </div>
  );
}

export default Courses;
