import React, { useState } from "react";
import { Img } from "../../../../components/website/Img";
import check from "../../../../assets/imgs/website/check.png";
import PropTypes from "prop-types";

function CollapsibleCourseItem({ title, duration, content }) {
  const [open, setOpen] = useState(false);

  const toggle = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="border-b border-geyser last:border-b-0">
      <div
        onClick={toggle}
        className="flex flex-col cursor-pointer py-3 w-full text-lg font-medium leading-7 text-neutral-100"
      >
        <div className="flex gap-3 justify-between items-center">
          <Img className="w-[24px] h-[24px] flex-shrink-0" src={check} />
          <div className="flex flex-1 items-center justify-between">
            <div
              className="font-inter text-smb font-medium leading-7 text-gray-900 mr-2 break-words"
              style={{ fontSize: "16px" }}
            >
              {title}
            </div>
            {duration && duration !== "0:00" && (
              <div
                className="font-inter font-medium leading-7 text-mistBlue whitespace-nowrap"
                style={{ fontSize: "12px" }}
              >
                {duration}
              </div>
            )}
          </div>
          <svg
            className={`w-5 h-5 transition-transform ${
              open ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-3 font-inter font-normal text-sm leading-6 text-slate-600">
          {content}
        </div>
      </div>
    </div>
  );
}

CollapsibleCourseItem.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string,
  content: PropTypes.node,
};

export default CollapsibleCourseItem;
