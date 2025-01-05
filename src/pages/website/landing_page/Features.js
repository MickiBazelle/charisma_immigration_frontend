import { Img } from "../../../components/website/Img";

function FeatureItems({ count }) {
  const features = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="flex flex-col w-full md:w-1/3 px-4 mb-8 md:mb-0"
    >
      <div className="flex flex-col items-center text-center">
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad1dd23615ddd7f54f773047fc04b67b2706413aac4aea09829e2586d5b6738f?"
          className="w-12 shadow-sm aspect-square"
        />
        <div className="mt-5 text-base font-inter font-semibold leading-8 text-gray-900">
          Lorem ipsum dolor sit amet
        </div>
        <div
          className="mt-2 text-sm font-inter tracking-wide leading-6 text-slate-600"
          style={{ wordSpacing: "0.2em" }}
        >
          Lorem ipsum dolor sit amet consectetur. Dapibus ut pulvinar faucibus
          sit nulla nulla augue ornare. Dignissim magnis pulvinar diam interdum
          nunc sit.
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-center mt-16 max-md:mt-10 w-full">
      {features}
    </div>
  );
}

function Features() {
  return (
    <div className="flex justify-center items-center self-stretch px-4 md:px-16 py-12 mt-16 w-full bg-gray-50 max-md:mt-10">
      <div className="flex flex-col items-center my-12 w-full max-w-[1216px] max-md:my-10">
        <div className="text-sm font-inter font-medium leading-6 text-center text-blue-500">
          FEATURES
        </div>
        <div className="mt-3 text-2xl md:text-3xl font-inter font-semibold tracking-wide leading-10 text-center text-gray-900">
          Why Charisma Immigration?
        </div>
        <div className="mt-3 text-base font-normal tracking-wide leading-8 text-center text-slate-600 px-4 md:px-0">
          Lorem ipsum dolor sit amet consectetur. Elementum enim ullamcorper
          odio.
        </div>
        <FeatureItems count={6} />
      </div>
    </div>
  );
}

export default Features;
