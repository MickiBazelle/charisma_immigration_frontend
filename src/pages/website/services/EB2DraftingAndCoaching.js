import * as React from "react";
import WebsiteFooter from "../../../components/website/Footer";
import CharismaImmigrationsHeader from "../../../components/website/navbar/CharismaImmigrationsHeader";
import { Img } from "../../../components/website/Img";
import BookASessionButton from "./components/BookASessionButton";

function TechnicalNature() {
  return (
    <section className="flex flex-col w-[45%] pl-32 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e63a11c5d76d6b0bf33f094df4a02d179e672e23ea5dd72cc903a4095381223?apiKey=c9788533178a4027a387d37dd621471a&"
          alt=""
          className="aspect-square h-[45px] w-[45px] mt-3"
        />
        <h2 className="text-2xl font-inter font-semibold leading-10 text-gray-900 max-md:max-w-full">
          Technical Nature
        </h2>
        <ul className="flex flex-col pl-4 mt-8 text-lg leading-7 text-riverBed max-md:max-w-full">
          <li className="flex gap-3 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f8889c3f7c18b95011c0cb8af65806135ddf6d2fbbba7b25d1f0fe3a8a29fa?apiKey=c9788533178a4027a387d37dd621471a&"
              alt=""
              className="shrink-0 self-start w-7 aspect-square fill-sky-100"
            />
            <p className="max-md:max-w-full pb-4 text-riverBed text-base font-inter">
              EB2 NIW application is highly technical, requiring expertise.
            </p>
          </li>
          <li className="flex gap-3  max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f8889c3f7c18b95011c0cb8af65806135ddf6d2fbbba7b25d1f0fe3a8a29fa?apiKey=c9788533178a4027a387d37dd621471a&"
              alt=""
              className="shrink-0 self-start w-7 aspect-square fill-sky-100"
            />
            <p className="max-md:max-w-full text-riverBed text-base font-inter">
              Applicants work with coaches to complete the document.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function DivisionOfTasks() {
  return (
    <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e34efae3f6ffd0e82cddeab31bc94775ec7735d512cd1f0b1dcb501763877b?apiKey=c9788533178a4027a387d37dd621471a&"
          alt=""
          className="aspect-square h-[45px] w-[45px]"
        />
        <h2 className="text-2xl font-semibold leading-10 text-gray-900 max-md:max-w-full">
          Division of Tasks
        </h2>
        <ul className="flex flex-col pl-4 mt-8 text-lg leading-7 text-slate-600 max-md:max-w-full">
          <li className="flex gap-3 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f8889c3f7c18b95011c0cb8af65806135ddf6d2fbbba7b25d1f0fe3a8a29fa?apiKey=c9788533178a4027a387d37dd621471a&"
              alt=""
              className="shrink-0 self-start w-7 aspect-square fill-sky-100"
            />
            <p className="max-md:max-w-full text-riverBed text-base font-inter">
              We draft critical sections, while applicants contribute to other
              parts.
            </p>
          </li>
          <li className="flex gap-3 mt-4 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f8889c3f7c18b95011c0cb8af65806135ddf6d2fbbba7b25d1f0fe3a8a29fa?apiKey=c9788533178a4027a387d37dd621471a&"
              alt=""
              className="shrink-0 self-start w-7 aspect-square fill-sky-100"
            />
            <p className="max-md:max-w-full text-riverBed text-base font-inter">
              Weekly zoom meetings to discuss progress and provide real-time
              supervision.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ApplicantInvolvement() {
  return (
    <section className="flex flex-col w-[45%] pl-32 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9d0cac72e418620b49156a25556dcbd0a2c7f5e369f6747ba59261bce53dee?apiKey=c9788533178a4027a387d37dd621471a&"
          alt=""
          className="aspect-square h-[45px] w-[45px]"
        />
        <h2 className="text-2xl font-semibold leading-10 text-gray-900 max-md:max-w-full">
          Applicant Involvement
        </h2>
        <ul className="flex flex-col pl-4 mt-8 text-lg leading-7 max-md:max-w-full">
          <li className="flex gap-3 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f8889c3f7c18b95011c0cb8af65806135ddf6d2fbbba7b25d1f0fe3a8a29fa?apiKey=c9788533178a4027a387d37dd621471a&"
              alt=""
              className="shrink-0 self-start w-7 aspect-square fill-sky-100"
            />
            <p className="max-md:max-w-full text-riverBed text-base font-inter">
              Opportunity for applicants to provide input based on their
              profile.
            </p>
          </li>
          <li className="flex gap-3 mt-4 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f8889c3f7c18b95011c0cb8af65806135ddf6d2fbbba7b25d1f0fe3a8a29fa?apiKey=c9788533178a4027a387d37dd621471a&"
              alt=""
              className="shrink-0 self-start w-7 aspect-square fill-sky-100"
            />
            <p className="max-md:max-w-full text-riverBed text-base font-inter">
              Shared responsibility model speeds up completion time.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function EB2DraftingAndCoaching() {
  return (
    <div className="">
      <div className="flex flex-col items-center bg-white">
        <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full px-[55px]">
          <div className="flex overflow-hidden relative flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col justify-center px-16 py-4 text-base leading-6 max-md:px-5 max-md:max-w-full">
              <CharismaImmigrationsHeader />
            </div>
          </div>
        </div>
        <main className="flex flex-col py-20 bg-white">
          <h1 className="self-center mt-4 text-3xl font-inter font-semibold tracking-wide leading-10 text-center text-gray-900 max-md:max-w-full">
            EB<span className="text-2xl font-inter tracking-tighter">2</span>{" "}
            NIW DRAFTING & COACHING
          </h1>
          <p className="self-center text-base font-inter leading-8 text-center text-slate-600 w-[768px] max-md:max-w-full">
            This service offers a collaborative approach, where applicants work
            with
            <br />
            experienced coaches to complete the process.
          </p>
          <section className="mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <TechnicalNature />
              <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc99ba8309e8e484183faae689cd86d08d0cce1c2adce353b08f205bbd9f084?apiKey=c9788533178a4027a387d37dd621471a&"
                  alt=""
                  className="grow w-full aspect-[1.28] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </section>
          <section className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cfd56a3d1d7a0d4227b5c0b308333f0f562a3e0e00cb34d379b26bfbea639dc?apiKey=c9788533178a4027a387d37dd621471a&"
                  alt=""
                  className="grow w-full aspect-[1.28] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <DivisionOfTasks />
            </div>
          </section>
          <section className="mt-24 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <ApplicantInvolvement />
              <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef4bcba68179f6b6cb1c9197a20a47f8e0350d99775ed8c3c876f01526cf872a?apiKey=c9788533178a4027a387d37dd621471a&"
                  alt=""
                  className="grow w-full aspect-[1.28] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </section>
          <BookASessionButton />
        </main>
        <WebsiteFooter />
      </div>
    </div>
  );
}

export default EB2DraftingAndCoaching;
