import Navigation from "./Navigation";

// Header Component
const Header = () => (
  <header className="flex flex-col justify-center px-7 mt-0 mr-5 ml-0 max-w-screen-xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2.5 justify-between text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12dd5e3af54b379e77761855cea5b95b1e4c4db9a999c2cdd27f068b0c9978a1?apiKey=a66d85f6e040456098a52ab3f0f88e70&"
            alt="Charisma Immigrations Logo"
            className="aspect-[1.04] w-[27px]"
          />
          <div className="grow">CharismaImmigrations</div>
        </div>
        <div className="flex flex-col justify-center self-start font-semibold text-slate-600 max-md:max-w-full">
          <Navigation />
        </div>
      </div>
      <div className="flex gap-5 justify-between pl-5 font-semibold">
        <div className="my-auto text-slate-600" tabIndex="0">
          Log in
        </div>
        <div
          className="grow justify-center px-5 py-2.5 text-white whitespace-nowrap rounded-lg border border-solid shadow-sm bg-[linear-gradient(45deg,#AD00FE_0%,#00E0EE_100%)] border-[color:var(--Component-colors-Components-Buttons-Primary-button-primary-border,#7F56D9)]"
          tabIndex="0"
        >
          {" "}
          Sign up{" "}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
