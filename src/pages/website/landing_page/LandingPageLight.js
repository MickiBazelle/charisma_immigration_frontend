import * as React from "react";
import { Img } from "../../../components/website/Img";
import { useRef, useEffect, useState } from "react";
import blob from "../../../assets/imgs/website/blob.png";
import arrow from "../../../assets/imgs/website/arrow.png";
import container from "./LandingPageLight.module.css";
import womanWithLaptop from "../../../assets/imgs/website/woman_with_laptop.png";
import CharismaImmigrationsHeader from "../../../components/website/navbar/CharismaImmigrationsHeader";
import Features from "./Features";
import OurServices from "../../../components/website/landing_page/OurServices";
import WebsiteFooter from "../../../components/website/Footer";
import Testimonials from "./components/Testimonials";
import CollapsibleFAQItem from "../../../components/website/CollapsibleFAQItem";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const GradientButton = ({ children }) => (
  <button
    type="button"
    className="justify-center items-center flex self-stretch px-16 py-3 text-base font-semibold leading-6 text-white whitespace-nowrap rounded-lg shadow-sm bg-gradient-to-r from-[#AD00FE] to-[#00E0EE] max-w-[528px] sm:px-5"
  >
    {children}
  </button>
);

const GetStartedButton = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <GradientButton>Get Started</GradientButton>
    </section>
  );
};

const FeatureItem = ({ featureText, spacing }) => (
  <div className={`flex gap-3 justify-between ${spacing}`}>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4efad79855f2e01cce9987cd2587aa3d5953e7dc300a7fb85aed19466af06606?apiKey=a66d85f6e040456098a52ab3f0f88e70&"
      className="w-6 aspect-square fill-green-100"
      alt=""
    />
    <div className="grow">{featureText}</div>
  </div>
);

function FeaturesSection() {
  const featureTexts = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  return (
    <section className="flex flex-col self-stretch px-8 py-9 text-base leading-6 border-b border-solid border-b-[color:var(--Colors-Border-border-secondary,#EAECF0)] max-w-[592px] text-slate-600 max-md:px-5">
      <header className="font-semibold text-gray-900 max-md:max-w-full">
        FEATURES
      </header>
      <div className="mt-1 leading-6 max-md:max-w-full">
        <span className="text-slate-600">Everything in our </span>
        <span className="font-semibold text-slate-600">free plan</span>
        <span className="text-slate-600"> plus....</span>
      </div>
      <section className="flex gap-5 justify-between mt-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1">
          {featureTexts.slice(0, featureTexts.length / 2).map((text, index) => (
            <FeatureItem
              key={index}
              featureText={text}
              spacing={index === 0 ? "" : "mt-4"}
            />
          ))}
        </div>
        <div className="flex flex-col flex-1">
          {featureTexts.slice(featureTexts.length / 2).map((text, index) => (
            <FeatureItem
              key={index}
              featureText={text}
              spacing={index === 0 ? "" : "mt-4"}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

function TrustedBadge(props) {
  return (
    <div className="justify-center self-start py-1 pr-2.5 pl-1 text-xsm font-medium leading-5 text-violet-700 whitespace-nowrap bg-white rounded-full border-solid border-[1.5px] border-violet-600">
      {props.text}
    </div>
  );
}

function HighlightedText(props) {
  return (
    <h1 className="mt-4 text-5xl font-inter font-semibold tracking-normal text-gray-900 bg-clip-text bg-gradient-to-br from-purple-500 to-teal-400 leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
      {props.text}
    </h1>
  );
}

function DescriptionText(props) {
  return (
    <p className="mt-2 text-base font-light tracking-wide leading-8 font-inter text-slate-600 max-md:max-w-full">
      {props.text}
    </p>
  );
}

const YouTubeEmbed = () => {
  return (
    <div className="">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/sMB2MNP-vkA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

function LearningPlatformSection() {
  return (
    <section className="flex relative flex-col self-stretch md:ml-[55px] mt-[55px] font-semibold max-md:mt-10 max-md:max-w-full">
      <TrustedBadge text="Trusted Immigrations Solution platform" />
      <h1 className="mt-[14px] text-5xl font-inter font-semibold tracking-normal text-gray-900 bg-clip-text bg-gradient-to-br from-purple-500 to-teal-400 leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        <span className="text-5xl font-inter font-semibold tracking-normal text-gray-900 bg-clip-text ">
          Lorem ipsum{" "}
        </span>
        <span className="mt-3 text-5xl font-inter font-semibold tracking-normal  bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 text-transparent">
          dolor
        </span>
        <span> sit </span>
        <span className="mt-3 text-5xl font-inter font-semibold tracking-normal bg-gradient-to-b from-violet-700 to-purple-500 bg-clip-text text-transparent">
          amet
        </span>
        <span> consectetur.</span>
      </h1>
      {/* <HighlightedText text="Lorem ipsum dolor sit amet consectetur." /> */}
      <DescriptionText text="Lorem ipsum dolor sit amet consectetur. Mattis nunc pellentesque condimentum non aliquet etiam cras. Eu lorem odio urna fusce in." />
      <button className="flex gap-1 justify-center items-center self-start w-[175px] h-[48px] mt-12 leading-6 text-white whitespace-nowrap rounded-xl  shadow-sm bg-gradient-to-tr from-brightViolet via-blueLotus to-neonBlue border-1 border-purpleShadeBush border-solid max-md:mt-10">
        <div className="text-sm font-semibold tracking-wide">View courses</div>
        <img
          loading="lazy"
          src={arrow}
          className="w-[18px] mt-1 ml-4 h-[14px] aspect-square"
          alt={arrow}
        />
      </button>
    </section>
  );
}

function ActionButton(props) {
  return (
    <button className="flex gap-2 justify-center self-start px-4 py-3 mt-12 text-base leading-6 text-white whitespace-nowrap rounded-xl border border-solid shadow-sm bg-[linear-gradient(45deg,#AD00FE_0%,#00E0EE_100%)] border-[color:var(--Component-colors-Components-Buttons-Primary-button-primary-border,#7F56D9)] max-md:mt-10">
      <div className="grow">{props.buttonText}</div>
      <img
        loading="lazy"
        src={props.iconSrc}
        className="w-6 aspect-square"
        alt={arrow}
      />
    </button>
  );
}

function LandingPageLight(props) {
  const serices = useRef(null);

  return (
    <div className={`${container}`}>
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full px-[55px] md:px-[20px]">
          <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ae05814414988b1d5badde6f695ae2f94991bf4ccb2d466668c91af5f2b1a9d?"
              className="object-cover absolute inset-0 "
            />
            <div className="flex relative flex-col justify-center px-16 py-4 text-base leading-6 max-md:px-5 max-md:max-w-full">
              <CharismaImmigrationsHeader />
            </div>
            <div className="relative justify-end mt-24 mb-52 max-w-full w-full md:w-[1280px] max-md:pl-5 max-md:my-10">
              <div className="flex mt-24 gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-full md:w-[54%] max-md:ml-0 font-customFont">
                  <LearningPlatformSection serVicesRef={serices} />
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-10 md:mt-0">
                  <div className="flex flex-col ml-0 md:ml-5 w-full max-md:w-full">
                    <Img
                      loading="lazy"
                      src={blob}
                      className="w-full aspect-[1.11] fill-gray-50 max-w-[532px]"
                    />
                  </div>
                  <div className="flex absolute flex-col ml-0 md:ml-5 mb-4 w-full max-md:w-full">
                    <Img
                      loading="lazy"
                      src={womanWithLaptop}
                      className="w-full aspect-[1] fill-gray-50 max-w-[532px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 justify-center items-center px-5 md:px-16 w-full font-semibold leading-[150%] max-w-full md:max-w-[1216px]">
          <div className="flex flex-col items-center max-w-full w-full md:w-[916px]">
            <div className="text-sm font-inter font-medium text-center text-blue-500 max-md:max-w-full">
              HELLO,
            </div>
            <div className="mt-3 font-inter text-xl tracking-tight leading-10 text-center text-gray-900 max-md:max-w-full">
              We are Charisma Immigration
            </div>
            <div className="mt-5 text-base font-inter font-normal leading-8 text-center text-neutral-400 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Sit ut ornare at non non
              ultrices. Aliquam ipsum dui nec faucibus ullamcorper. Feugiat
              platea amet aenean non.
            </div>
            <div className="flex mt-[50px] overflow-hidden relative flex-col justify-center self-stretch h-200 w-full md:w-400 text-xs text-white whitespace-nowrap rounded-lg shadow-2xl min-h-[516px] max-md:mt-10 max-md:max-w-full">
              <div className="w-full">
                <YouTubeEmbed />
              </div>
            </div>
          </div>
        </div>
        <Features />
        <OurServices />
        <Testimonials />
        <div className="flex justify-center items-center self-stretch px-5 md:px-16 py-12 mt-1.5 w-full bg-white">
          <div className="flex flex-col items-center my-12 w-full max-w-full md:max-w-[1216px]">
            <div className="text-2xl md:text-3xl font-inter font-semibold tracking-normal leading-10 text-center text-gray-900">
              Frequently asked questions
            </div>
            <div
              className="mt-4 font-inter text-base md:text-lg leading-8 text-center text-slate-600"
              style={{ fontWeight: "300" }}
            >
              Everything you need to know about the product and billing.
            </div>

            {/* FAQ items */}
            {/* ... (Keep the existing FAQ items) */}

            <div className="flex justify-center items-center self-stretch px-5 md:px-16 py-9 mt-16 font-semibold bg-gray-50 rounded-2xl leading-[150%]">
              <div className="flex flex-col max-w-full w-full md:w-[768px]">
                <Img
                  loading="lazy"
                  srcSet="..."
                  className="self-center max-w-full aspect-[2.13] w-[120px]"
                />
                <div className="mt-8 text-xl text-center text-gray-900">
                  Still have questions?
                </div>
                <div className="mt-2 text-base md:text-lg leading-7 text-center text-slate-600">
                  <span className="text-slate-600">
                    Can't find the answer you're looking for?
                  </span>
                  <span className="text-slate-600">
                    {" "}
                    Please chat to our friendly team.
                  </span>
                </div>
                <div className="justify-center self-center px-5 py-3 mt-8 text-base text-white whitespace-nowrap rounded-lg border border-solid shadow-sm bg-[linear-gradient(45deg,#AD00FE_0%,#00E0EE_100%)] border-[color:var(--Component-colors-Components-Buttons-Primary-button-primary-border,#7F56D9)]">
                  Get in touch
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <WebsiteFooter />
      </div>
    </div>
  );
}

export default LandingPageLight;
