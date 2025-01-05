import { Link } from "react-router-dom";
import { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

function CollapsibleSidebarItem({ label, icon, children }) {
  const [open, setOpen] = useState(false);

  const toogle = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <li onClick={toogle}>
      <div className="mb-2">
        <Link to="#" className="flex items-center justify-between p-2.5">
          <div className="flex items-center gap-3">
            {icon}
            <span class="text-smoke font-inter" data-key="t-dashboards">
              {label}
            </span>
          </div>

          <div
            className={`w-4 h-2 ${
              open ? "transform rotate-90 ease-in-out" : ""
            }`}
          >
            <BiSolidRightArrow className="w-4 h-3 text-gray-500" />
          </div>

          {/* <div className="">
            <svg
              className={`w-4 h-4 ${
                open ? "transform rotate-180 ease-in-out" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div> */}
        </Link>
        <div
          className={`overflow-hidden transition-max-height ease-in-out duration-500 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div>{children}</div>
        </div>
      </div>
    </li>
  );
}

export default CollapsibleSidebarItem;
