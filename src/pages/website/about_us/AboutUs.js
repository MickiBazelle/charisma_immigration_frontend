import * as React from "react";
import CharismaImmigrationsHeader from "../../../components/website/navbar/CharismaImmigrationsHeader";
import { Form } from "semantic-ui-react";
import WebsiteFooter from "../../../components/website/Footer";
import { Img } from "../../../components/website/Img";

function AboutUs(props) {
  const YouTubeEmbed = () => {
    return (
      <div className="">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/DTB8lATvXkw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full md:px-[55px]">
          <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-16 py-4 text-base leading-6 max-md:px-5 max-md:max-w-full">
              <CharismaImmigrationsHeader />
            </div>
          </div>
          <div className="flex flex-col items-center px-20 py-12 mt-4 w-full font-semibold text-center bg-white max-md:px-5 max-md:max-w-full">
            <div className="mt-4 text-SM font-inter leading-6 text-blue-500 max-md:mt-10 max-md:max-w-full">
              ABOUT US
            </div>
            <div className="mt-3 text-3xl font-inter tracking-wide text-gray-900 leading-[60px] w-[768px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
              Our mission is to help you migrate seamlesssly
            </div>
            <div className="mt-6 mb-12 text-base font-inter tracking-wide font-light leading-8 text-slate-600 w-[768px] max-md:mb-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Diam sagittis amet in eget
              vulputate <br />
              cras. Senectus cum libero arcu elit ut neque a odio. Felis at
              egestas sem in. Nibh tincidunt mollis etiam senectus amet. Dis
              tempus id eget maecenas sit.
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 pl-20 px-16 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex-wrap justify-center content-start px-16 py-20 mb-12 w-full bg-gray-50 rounded-2xl max-w-[1216px] max-md:px-5 max-md:mb-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto font-semibold text-center whitespace-nowrap max-md:mt-10">
                    <div className="text-4xl font-inter tracking-wide text-blue-500 leading-[72px] max-md:text-4xl">
                      400+
                    </div>
                    <div className="mt-3 text-smb font-inter leading-7 text-gray-900">
                      Projects completed
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto font-semibold text-center whitespace-nowrap max-md:mt-10">
                    <div className="text-4xl font-inter tracking-wide text-blue-500 leading-[72px] max-md:text-4xl">
                      10k
                    </div>
                    <div className="mt-3 text-smb font-inter leading-7 text-gray-900">
                      Global downlads
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto font-semibold text-center whitespace-nowrap max-md:mt-10">
                    <div className="text-4xl font-inter tracking-wide text-blue-500 leading-[72px] max-md:text-4xl">
                      200+
                    </div>
                    <div className="mt-3 text-smb font-inter leading-7 text-gray-900">
                      5-star reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center self-center px-16 w-full font-semibold leading-[150%]  max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center self-center items-center max-w-full w-[916px]">
              <div className="text-sm font-inter font-medium text-center text-blue-500 max-md:max-w-full">
                HELLO,
              </div>
              <div className="mt-3 text-2xl font-inter tracking-wide leading-10 text-center text-gray-900 max-md:max-w-full">
                We are Charisma Immigration
              </div>
              <div className="mt-5 text-base font-inter leading-6 font-normal text-center text-neutral-400 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Sit ut ornare at non non
                ultrices. <br />
                Aliquam ipsum dui nec faucibus ullamcorper. Feugiat platea amet
                aenean non.
              </div>
              <div className="flex overflow-hidden relative flex-col justify-center self-stretch mt-16 w-full text-xs text-white whitespace-nowrap rounded-lg shadow-2xl sm:min-h-[300px] md:min-h-[516px] max-md:mt-10 max-md:max-w-full">
                <YouTubeEmbed />
              </div>
            </div>
          </div>
          <div className="flex-wrap content-start self-center md:px-5 mt-28  w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 md:mx-10 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-6 pt-6 pb-12 w-full text-base rounded-lg font-semibold leading-6 whitespace-nowrap bg-gray-50 max-md:px-5 max-md:mt-8">
                  <Img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/595e6168ca89709afd32792fac7aa640462024c6e4bdce4c7541e631bbecb71a?"
                    className="w-12 aspect-square"
                  />
                  <div className="mt-16 text-base font-inter text-gray-900 max-md:mt-10">
                    Send us an email
                  </div>
                  <div className="mt-2 text-sm font-inter font-normal text-slate-600">
                    Have any enquires?
                  </div>
                  <div className="mt-4 text-sm font-inter font-medium text-blue-500">
                    example@charisma.com
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-6 w-full text-base font-semibold leading-6 bg-gray-50 max-md:px-5 max-md:mt-8">
                  <Img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f3ea7c3901802589af2cedc601ca275995a4841e9698d411e83bd4188d11472?"
                    className="w-12 aspect-square"
                  />
                  <div className="mt-16 text-base font-inter text-gray-900 whitespace-nowrap max-md:mt-10">
                    Visit us
                  </div>
                  <div className="mt-2 whitespace-nowrap text-sm font-inter font-normal text-slate-600">
                    Come meet our friendly team at HQ.
                  </div>
                  <div className="mt-4 leading-6 text-sm font-inter font-normal text-blue-500">
                    100 Smith StreetCollingwood VIC 3066 USA
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-6 pt-6 pb-12 w-full text-base font-semibold leading-6 bg-gray-50 max-md:px-5 max-md:mt-8">
                  <Img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f49a7e6d2a6f14b09b080a015959ce2d43fd561f9b22ebc1634b7f9b14c6ab25?"
                    className="w-12 aspect-square"
                  />
                  <div className="mt-16 text-xl text-gray-900 whitespace-nowrap max-md:mt-10">
                    Call us
                  </div>
                  <div className="mt-2 whitespace-nowrap text-sm font-inter font-normal text-slate-600">
                    Have more questions?
                  </div>
                  <div className="mt-4 text-blue-500 text-sm font-inter font-normal">
                    +1 (555) 000-0000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-16 h-96 mt-16 w-full bg-gray-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 w-full max-w-[1216px] max-md:px-5 max-md:my-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[768px]">
              <div className="text-3xl font-inter font-semibold tracking-normal leading-10 text-center text-gray-900 max-md:max-w-full">
                Sign up for our newsletter
              </div>
              <div className="mt-4 text-base font-inter font-normal leading-8 tracking-normal text-center text-slate-600 max-md:max-w-full">
                Be the first to know about releases and industry news and
                insights.
              </div>
              <div className="flex gap-4 self-center mt-8 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1">
                  <Form.Field>
                    <input
                      placeholder="Enter your email"
                      type="email"
                      className="justify-center px-3.5 h-12 w-80 placeholder-text-sm text-sm font-inter leading-6 text-gray-500 bg-white rounded-lg border border-solid border-[color:var(--Colors-Border-border-primary,#D0D5DD)] text-ellipsis"
                    />
                  </Form.Field>
                  <div className="mt-1.5 text-sm font-light font-inter leading-6 text-slate-600">
                    We care about your data in our{" "}
                    <span className="underline">privacy policy</span>.
                  </div>
                </div>
                <button className="justify-center self-start h-12 w-32 text-sm font-inter font-semibold leading-6 text-white rounded-lg shadow-sm bg-gradient-to-tr from-brightViolet via-blueLotus to-neonBlue border-1 border-purpleShadeBush border-solid">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <WebsiteFooter />
      </div>
    </div>
  );
}

export default AboutUs;
