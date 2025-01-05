import React from "react";
import CollapsibleCourseItem from "./CollapsibleCourseItem";

function RightPanelContent() {
  return (
    <div>
      <div
        className="font-inter font-semibold mt-[2rem]"
        style={{ fontSize: "18px" }}
      >
        Your course progress
      </div>
      <div className="mt-3 w-full h-[76px] bg-catskillWhite rounded-xl">
        <div className="pt-4 px-4 font-inter">
          <div className="flex items-center justify-between">
            <div className="font-semibold">30%</div>
            <div className="text-riverBed">4/10 lessons</div>
          </div>
          <div className="flex">
            <div className="mt-2 w-full h-[8px] bg-dawnPink rounded-lg"></div>
            <div className="absolute mt-2 w-[165px] h-[8px] bg-dodgerBlue rounded-lg"></div>
          </div>
        </div>
      </div>
      <div
        className="pt-6 font-inter font-semibold"
        style={{ fontSize: "18px" }}
      >
        Course Content
      </div>

      <div className="pt-2">
        <CollapsibleCourseItem title="Chapter One" duration="59:00" />
        <CollapsibleCourseItem title="Chapter Two" duration="59:00" />
        <CollapsibleCourseItem title="Chapter Three" duration="59:00" />
        <CollapsibleCourseItem title="Chapter Four" duration="59:00" />
      </div>
    </div>
  );
}

export default RightPanelContent;
