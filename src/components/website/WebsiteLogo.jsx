import React from "react";
import { Link } from "react-router-dom";

function WebsiteLogo({ openSidebar }) {
  return (
    <Link to="/" className="mt-2 text-black">
      <div className="flex justify-between items-center cursor-pointer">
        <span className="flex gap-2 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12dd5e3af54b379e77761855cea5b95b1e4c4db9a999c2cdd27f068b0c9978a1?apiKey=a66d85f6e040456098a52ab3f0f88e70&"
            alt="Logo"
            className="inline aspect-[1.04] w-[27px]"
          />
          {openSidebar ? (
            <div className="text-sm font-normal font-poppins">
              CharismaImmigrations
            </div>
          ) : (
            <div></div>
          )}
        </span>
      </div>
    </Link>
  );
}

export default WebsiteLogo;
