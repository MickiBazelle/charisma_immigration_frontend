import React, { useState } from "react";
import { Img } from "../../../../components/website/Img";
import check from "../../../../assets/imgs/website/check.png";

function CollapsibleCourseItem({ title, duration, content }) {
  const [open, setOpen] = useState(false);

  const toogle = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <div
      onClick={toogle}
      className="flex flex-col cursor-pointer pb-3 mt-6 w-full text-lg font-medium leading-7 border-b-[1px] border-solid border-b-geyser text-neutral-100"
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
          <div
            className="font-inter font-medium leading-7 text-mistBlue whitespace-nowrap"
            style={{ fontSize: "12px" }}
          >
            {duration}
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height ease-in-out duration-200 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mt-2 font-inter font-normal text-sm leading-6 text-slate-600">
          {content}
        </div>
      </div>
    </div>
  );
}

export default CollapsibleCourseItem;
