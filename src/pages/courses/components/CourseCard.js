import { useNavigate } from "react-router-dom";
import { Img } from "../../../components/website/Img";

function CourseCard({ thumbnail, title, instructor, price }) {
  const navigate = useNavigate();

  const onViewDetailsClick = (e) => {
    navigate("/accounts/courses/1/detail/");
  };

  return (
    <div className="flex flex-col grow px-6 py-7 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <Img
        loading="lazy"
        src={thumbnail}
        className="w-full aspect-[1.75]"
        alt="Course"
      />
      <div className="mt-6">
        <div className="flex flex-col">
          <div className="flex flex-col max-md:gap-0">
            <div className="flex flex-col text-wrap max-md:ml-0 max-md:w-full">
              <div className="flex flex-row justify-between grow text-zinc-400 max-md:mt-10">
                <div className="text-lg font-bold whitespace-wrap w-[71%] text-slate-700">
                  {title}
                </div>
                <div className="text-lg font-bold text-center text-slate-700">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-700">{price}</span>
                </div>
              </div>
              <div className="flex flex-row justify-between grow text-zinc-400 max-md:mt-10">
                <div className="flex gap-2 justify-center mt-16 text-base">
                  <div className="flex-auto text-sm">110+ Content</div>
                </div>
                <div
                  className="mt-16 text-sm text-emerald-400 max-md:mt-10"
                  tabIndex="0"
                  role="button"
                  onClick={onViewDetailsClick}
                >
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
