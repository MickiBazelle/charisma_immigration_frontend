import { Img } from "../../../../components/website/Img";

function CourseOverviewItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 mt-4 mb-3">
      <div>
        <Img className="h-[24px] w-[24px]" src={icon} />
      </div>
      <div
        className="text-riverBed font-light font-inter"
        style={{ fontSize: "18px" }}
      >
        {label}
      </div>
    </div>
  );
}

export default CourseOverviewItem;
