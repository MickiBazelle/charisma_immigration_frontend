import * as React from "react";
import { Link } from "react-router-dom";

function NavigationLink({ children, to, isActive, onClick, name }) {
  return (
    <li
      onClick={onClick}
      className={`mx-4 my-6 md:my-0 ${
        isActive ? "text-blue-700" : "text-slate-600"
      }  font-inter text-sm font-semi-bold focus:text-blue-700 hover:text-blue-700 active:text-blue-700 cursor-pointer`}
    >
      <Link
        className="focus:text-blue-700 active:text-blue-700 font-inter"
        to={to}
        style={{ color: "inherit" }}
      >
        <div className="whitespace-nowrap">{children}</div>
      </Link>
    </li>
  );
}

export default NavigationLink;
