import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ imageSrc, title, description, moreInfoText, route }) => (
  <div className="flex flex-col w-[33%] h-[426px] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col justify-center text-base h-full font-semibold max-md:mt-10">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[240px] aspect-[1.59] sm:object-cover rounded-lg"
      />
      <div className="mt-4 text-base font-inter leading-7 text-gray-900">
        {title}
      </div>
      <p className="text-sm font-inter tracking-wide font-normal leading-8 text-slate-600">
        {description}
      </p>
      <div className="flex-grow"></div>
      <Link to={route}>
        <div className="flex gap-2 self-start mt-auto text-sm font-inter font-semibold text-blue-500 leading-[150%]  max-md:mt-10">
          <span>{moreInfoText}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a94ebf9681ddb23816849295f3a35a4a85f3b64f29ce4d4df0e9bb1d2dbf74dd?apiKey=c9788533178a4027a387d37dd621471a&"
            alt=""
            className="shrink-0 my-auto w-5 aspect-square"
          />
        </div>
      </Link>
    </div>
  </div>
);

const services = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/971aba562f041750a7b6b761e68d856ce2b9c4e6c74c4d6bc8d2e889e0d3a18f?apiKey=c9788533178a4027a387d37dd621471a&",
    title: (
      <>
        <span className="text-gray-900">EB</span>
        <span className="text-lg text-gray-900">2</span>
        <span className="text-gray-900"> NIW Consulting Services</span>
      </>
    ),
    description:
      "1-2 hours zoom face-to-face consultation to ask questions on eligibility and services.",
    moreInfoText: "More Information",
    route: "/eb2-consulting-services/",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ee65c39ac8121a08c53c17e666c2a1d597ac3f5470352832c401bcfb4d42126c?apiKey=c9788533178a4027a387d37dd621471a&",
    title: (
      <>
        <span className="text-gray-900">EB</span>
        <span className="text-lg text-gray-900">2</span>
        <span className="text-gray-900"> NIW Drafting and Coaching</span>
      </>
    ),
    description:
      "Supervision of applicants work from start until submission to USCIS : includes consulting & outline services plus a copy of a complete petition EB2 draft as guide.",
    moreInfoText: "More Information",
    route: "/eb2-drafting-and-coaching/",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/79e61ef1a9ba37a48cdd491de5c4e669ec542ad4eff3d0d1d39aef39a1169afe?apiKey=c9788533178a4027a387d37dd621471a&",
    title: "Take our Course",
    description:
      "Assisting in the preparation and filing of the necessary paperwork to obtain a residence permit in a new country.",
    moreInfoText: "More Information",
    route: "/courses/",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/560f4f5a9ba0187ed949e7203e98d86537d0e361258f395c3bd3bafb32b837c0?apiKey=c9788533178a4027a387d37dd621471a&",
    title: "Petition Review",
    description:
      "Reviewing already drafted EB2 NIW for completeness and accuracy including associated forms before submission.",
    moreInfoText: "More Information",
    route: "/petition-review/",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8cbf07ab09be792d241aa2309f45e3cf4237ac0ebfc170f1abc6106a6143c09a?apiKey=c9788533178a4027a387d37dd621471a&",
    title: "Request For Evidence (RFE) Assistance",
    description:
      "We are now accepting and assisting clients to respond to their RFEs relating to their EB2 NIW petitions.",
    moreInfoText: "More Information",
    route: "/request-for-evidence-assistance/",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/01e439f6de8420293e03ab305538db588330fe2119b41b1b267efc0ed54b3137?apiKey=c9788533178a4027a387d37dd621471a&",
    title: "US Schools Admissions and Visa Services",
    description:
      "Providing advice and assistance to individuals and families who are looking to move abroad.",
    moreInfoText: "More Information",
    route: "/us-schools-admissions-and-visa-services/",
  },
];

const OurServices = () => {
  return (
    <section className="flex flex-col mt-[100px] items-center md:px-[55px]">
      <h2 className="text-sm font-medium font-inter leading-6 text-center text-blue-500 max-md:max-w-full">
        PRODUCTS
      </h2>
      <h1 className="mt-2 text-xl font-semibold font-inter tracking-tight leading-10 text-center text-gray-900 max-md:max-w-full">
        Our services
      </h1>
      <p className="mt-2 font-inter tracking-wide text-base leading-8 text-center text-slate-600 max-md:max-w-full">
        We offer a variety of services that meet our clients' satisfaction.
      </p>
      <div className="self-stretch px-5 mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="self-stretch px-5 mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
