import React from "react";
import { TbDownload } from "react-icons/tb";
import { FaFilter } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import AlertComponent from "./global/AlertComponent";
import { PageSizeDropDown } from "./PageSizeDropDown";

function ListFilter({ isLoading, onClick }) {
  return (
    <div className="cursor-pointer" onClick={() => onClick()}>
      <div className="flex" style={{ float: "right" }}>
        <div className="flex items-center justify-between px-3 h-10 rounded-lg bg-ebonyClay mr-4">
          <LuRefreshCcw
            className={`text-smoke h-[16px] w-[16px] ${
              isLoading ? "animate-spin" : ""
            }`}
          />
        </div>
        <div className="flex items-center justify-between px-3 h-10 rounded-lg bg-ebonyClay mr-4">
          <FaFilter className="text-smoke h-[16px] w-[16px]" />
          <div className="h-[20px] border-l border-smoke mx-2"></div>
          <TbDownload className="text-smoke h-[16px] w-[16px]" />
        </div>
      </div>
    </div>
  );
}

export default ListFilter;
