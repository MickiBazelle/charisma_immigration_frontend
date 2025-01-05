import React from "react";

function TrustedBadge(props) {
  return (
    <div className="justify-center self-start py-1 pr-2.5 pl-1 text-sm font-medium leading-5 text-violet-700 whitespace-nowrap bg-white rounded-full border-solid border-[1.5px] border-violet-600">
      {props.text}
    </div>
  );
}

function HighlightedText(props) {
  return (
    <h1 className="mt-4 text-6xl tracking-tighter text-gray-900 bg-clip-text bg-gradient-to-br from-purple-500 to-teal-400 leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
      {props.text}
    </h1>
  );
}

function DescriptionText(props) {
  return (
    <p className="mt-6 text-xl leading-8 text-slate-600 max-md:max-w-full">
      {props.text}
    </p>
  );
}

function ActionButton(props) {
  return (
    <button className="flex gap-2 justify-center self-start px-5 py-3 mt-12 text-base leading-6 text-white whitespace-nowrap rounded-lg shadow-sm bg-gradient-to-br from-purple-500 to-teal-400 max-md:mt-10">
      <div className="grow">{props.buttonText}</div>
      <img
        loading="lazy"
        src={props.iconSrc}
        className="w-6 aspect-square"
        alt={props.iconAlt}
      />
    </button>
  );
}

function LearningPlatformSection() {
  return (
    <section className="flex relative flex-col self-stretch my-auto ml-20 font-semibold max-md:mt-10 max-md:max-w-full">
      <TrustedBadge text="Trusted Immigrations Solution platform" />
      <HighlightedText text="Lorem ipsum dolor sit amet consectetur." />
      <DescriptionText text="Lorem ipsum dolor sit amet consectetur. Mattis nunc pellentesque condimentum non aliquet etiam cras. Eu lorem odio urna fusce in." />
      <ActionButton
        buttonText="View courses"
        iconsrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e009c8d349a041b0af8dd86a6dcb75eb60fc8c2907057e2c75b1c038f75053e2?apiKey=a66d85f6e040456098a52ab3f0f88e70&"
        iconAlt="Arrow icon"
      />
    </section>
  );
}

export default LearningPlatformSection;
