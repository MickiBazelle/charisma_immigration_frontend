import React, { useState } from "react";
import { Img } from "./Img";

function CollapsibleFAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const toogle = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <div
      onClick={toogle}
      className="flex cursor-pointer flex-col pt-6 mt-8 max-w-full text-lg font-medium leading-7 border-t border-solid border-b-[color:var(--Colors-Border-border-secondary,#1F242F)] text-neutral-100 w-[768px]"
    >
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="grow max-md:max-w-full">
          <div
            className="font-inter text-smb font-medium leading-7 text-gray-900 max-md:max-w-full"
            style={{ fontSize: "16px" }}
          >
            {question}
          </div>
        </div>

        {open ? (
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f158c643bf35557644efd85aed2140e2395af90750b9cd2c37d4be2235cdd053?"
            className="self-start w-6 aspect-square"
          />
        ) : (
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7c6b330af485c21197335f1fdb907433f34c08ae0239680f8019ee15a6ce842?"
            className="my-auto w-6 aspect-square"
          />
        )}
      </div>
      <div
        className={`overflow-hidden transition-max-height ease-in-out duration-200 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-2 font-inter font-normal text-sm leading-6 text-slate-600 max-md:max-w-full">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleFAQItem;
