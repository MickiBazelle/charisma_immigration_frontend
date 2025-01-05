import LoginButton from "./LoginButton";
import NavigationLink from "./NavigationLink";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";

function CINavbar(serVicesRef) {
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const onmenuOpen = () => {
    setmenuOpen(!menuOpen);
  };

  const handleLogoClick = (e) => {
    navigate("/");
  };

  return (
    <div>
      <nav className="md:flex md:items-center md:justify-between">
        {/* <header className="flex gap-2 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
        
      </header> */}
        <div onClick={handleLogoClick} className="mt-2 text-black">
          <div className="flex justify-between items-center cursor-pointer">
            <span className="flex gap-2 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/12dd5e3af54b379e77761855cea5b95b1e4c4db9a999c2cdd27f068b0c9978a1?apiKey=a66d85f6e040456098a52ab3f0f88e70&"
                alt="Logo"
                className="inline aspect-[1.04] w-[27px]"
              />
              <div className="text-sm font-normal font-poppins">
                CharismaImmigrations
              </div>
            </span>

            <span
              className="flex flex-col cursor-pointer md:hidden"
              onClick={onmenuOpen}
            >
              {menuOpen === true ? (
                <IoCloseOutline className="h-10 w-10" />
              ) : (
                <IoMenuOutline className="h-10 w-10" />
              )}
            </span>
          </div>
        </div>

        <ul
          className="hidden md:flex items-center font-semibold text-slate-600 z-auto static w-auto
        opacity-100 transition-all ease-in duration-500"
        >
          <NavLinks />
        </ul>

        <div className="hidden md:block">
          <LoginButton />
        </div>
      </nav>

      {/* <ul className="md:flex md:static md:items-center md:z-auto left-0 bg-white w-full absolute gap-5 font-semibold text-slate-600 justify-between px-5"> */}
      {/* <ul
        className={`md:flex md:items-center font-semibold text-slate-600 
      md:z-auto md:static absolute w-full left-0 md:w-auto
      md:pl-0 pl-5 md:opacity-100 sm:opacity-0 top-[-400px] transition-all ease-in 
      duration-500`}
      > */}
      <div>
        {menuOpen && (
          <ul
            className={`bg-white space-y-4 md:hidden transition-transform transform ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            } duration-300 ease-in-out`}
          >
            <NavLinks />
          </ul>
        )}
      </div>
    </div>
  );
}
export default CINavbar;
