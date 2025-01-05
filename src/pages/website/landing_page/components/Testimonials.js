import { Img } from "../../../../components/website/Img";
import caitlyn from "../../../../assets/imgs/website/avatar4.png";

function Testimonials() {
  return (
    <div className="w-full">
      <div className="mt-36 text-sm font-inter font-medium leading-6 text-center text-blue-500 max-md:mt-10 max-md:max-w-full">
        TESTIMONIALS
      </div>
      <div className="mt-3 text-2xl font-inter font-semibold tracking-tight leading-10 text-center text-gray-900 max-md:max-w-full">
        Don’t take our word for it.
      </div>
      <div
        className="mt-4 text-base font-inter leading-8 text-center text-slate-600 max-md:max-w-full"
        style={{ fontSize: "18px", fontWeight: "300" }}
      >
        Hear from our amazing customers all over the world
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-16 mt-5 w-full bg-blueberry max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-20 my-12 w-full max-w-[1216px] max-md:px-5 max-md:my-10 max-md:max-w-full">
          <div
            className="mx-4 text-3xl font-inter font-medium tracking-wide leading-10 text-center text-white max-md:mr-2.5 max-md:max-w-full"
            style={{ lineHeight: "1.22" }}
          >
            Lorem ipsum dolor sit amet consectetur. Nulla egestas
            <br />
            gravida vitae orci. Posuere vulputate semper euismod.
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center self-center mt-8 w-[64px] h-[64px] rounded-full aspect-square">
            <Img
              loading="lazy"
              src={caitlyn}
              className="object-cover absolute inset-0 size-full "
            />
            <div className="relative shrink-0 h-16 rounded-full border-solid border-[0.75px] border-[color:var(--Component-colors-Components-Avatars-avatar-contrast-border,rgba(0,0,0,0.08))]" />
          </div>
          <div className="mx-4 mt-4 text-base font-inter font-medium leading-7 text-center text-white max-md:mr-2.5 max-md:max-w-full">
            Caitlyn King
          </div>
          <div className="mx-4 mt-1 text-sm font-light font-inter tracking-wide leading-6 text-center text-purple-200 max-md:mr-2.5 max-md:max-w-full">
            Head of Design, Layers
          </div>
          <div className="flex gap-1 self-center mt-4 max-w-full w-[116px]">
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23d80ce691205919d0e6b361bfbec8049cf3d5d395510c2bc7307aa151b79515?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d02627481d003e8140e8a7c49a877ffa3d67d2022a79b19e287412aeec010e50?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a964b03e56cc6573c67b454f3893e9daeb0ed91d0e967a4e6d53084e88be878e?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17c444b640c169ec46c0f78fcc0a068be9a14052ff15ff9b27dc9550710d59ac?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18aff03b45c60b961646cf59fabe1fa5979293f4d6fe80181ff68df9605d5b99?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
          </div>
          <div className="flex gap-4 justify-center self-center mt-10 w-[62px]">
            <div className="flex-2 shrink-0 h-2.5 w-2.5 bg-white rounded-full" />
            <div className="flex-2 shrink-0 h-2.5 w-2.5 bg-blue-500 rounded-full" />
            <div className="flex-2 shrink-0 h-2.5 w-2.5 bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
