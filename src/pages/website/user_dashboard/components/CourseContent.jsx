import { Img } from "../../../../components/website/Img";
import search from "../../../../assets/imgs/website/search.png";
import star from "../../../../assets/imgs/website/star.png";
import { useState, useEffect } from "react";
import CollapsibleCourseItem from "./CollapsibleCourseItem";
import { logout } from "../../../../utils/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import RightPanelContent from "./RightPanelContent";
import EmptyCourse from "./EmptyCourse";
import axiosClientInstance from "../../../../utils/axios_client";

function CourseContent() {
  const [activeTab, setActiveTab] = useState("About");
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axiosClientInstance.get("/course/");
        console.log(response.data);
        setCourseData(response.data);
      } catch (err) {
        setError(err.message);
        toast.error("Failed to load course data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  // Check the screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMdScreen) {
      setActiveTab("Course Content");
    } else {
      setActiveTab("About");
    }
  }, [isMdScreen]);

  const onLogoutClick = async (e) => {
    e.preventDefault();
    const logoutData = await logout();
    if (logoutData.data !== null) {
      toast.success("Successfully Logged out");
      navigate("/");
    } else {
      toast.error("Could not log you out. Try again later");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error}
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <EmptyCourse />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <div
            className="text-riverBed font-inter"
            style={{ fontSize: "14px", lineHeight: "1.29" }}
          >
            {courseData.description}
          </div>
        );
      case "Q&A":
        return (
          <div
            className="text-riverBed font-inter font-normal text-left"
            style={{ fontSize: "14px", lineHeight: "1.29" }}
          >
            Questions and answers about the course will be displayed here.
          </div>
        );
      case "Course Content":
        return (
          <div className="lg:hidden">
            <RightPanelContent chapters={courseData.chapters} />;
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <div className="flex items-center mx-8 mt-8">
          <Img className="ml-2 h-[20px] w-[20px] absolute" src={search} />
          <input
            className="px-[2.2rem] outline-none text-xsm rounded-lg w-full font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
            placeholder="Search"
            type="text"
            style={{ height: "44px", border: "1px solid #d0d5dd" }}
          />
        </div>
        <button
          onClick={onLogoutClick}
          className="right-0 mr-14 bg-lightRed rounded-xl text-white h-[44px] w-[91px]"
        >
          Logout
        </button>
      </div>

      <div className="flex h-screen">
        <ToastContainer pauseOnHover theme="colored" />

        <div className="">
          <div className="mt-8 bg-alabaster h-full font-inter">
            <div className="mx-12 lg:w-[39vw]">
              <div className="flex pt-8 text-xsm gap-1 text-[#9da4b1] cursor-pointer">
                <div>Chapter {courseData.chapters[0]?.order || 1}</div>
                <div>&gt;</div>
                <div>{courseData.chapters[0]?.title || "Course Content"}</div>
              </div>
              {courseData.chapters[0]?.contents[0]?.video_url && (
                <iframe
                  className="mt-4 sm:mt-[50px] md:mt-2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[326px] w-full rounded-lg"
                  src={courseData.chapters[0].contents[0].video_url}
                  title={courseData.chapters[0].contents[0].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              <div
                className="mt-8 font-inter font-medium"
                style={{ fontSize: "20px" }}
              >
                {courseData.title}
              </div>
              <div
                className="mt-2 flex items-center gap-2.5 text-mistBlue font-inter font-normal flex-wrap"
                style={{ fontSize: "14px" }}
              >
                <div className="mt-2">
                  Course by {courseData.instructor.user.first_name}{" "}
                  {courseData.instructor.user.last_name}
                </div>
                <div className="h-[7px] w-[7px] bg-black rounded-full"></div>
                <Img
                  className=""
                  src={star}
                  style={{ width: "20px", height: "19.5px" }}
                />
                <div className="">4.8(1,820)</div>
                <div className="h-[7px] w-[7px] bg-black rounded-full"></div>
                <div className="">
                  {courseData.total_duration_display !== "0:00"
                    ? `${courseData.total_duration_display} total hours`
                    : "Duration not available"}
                </div>
                {!courseData.is_subscribed && (
                  <>
                    <div className="h-[7px] w-[7px] bg-black rounded-full"></div>
                    <div className="">
                      Starting from ${courseData.pricing.monthly.price}/month
                    </div>
                  </>
                )}
              </div>
              <div className="mt-6 flex border-b gap-4">
                <button
                  className={`lg:hidden border-b-2 pb-2 -mb-px font-inter font-semibold duration-300 ease-in-out ${
                    activeTab === "Course Content"
                      ? "border-dodgerBlue text-dodgerBlue"
                      : "text-mistBlue"
                  }`}
                  onClick={() => setActiveTab("Course Content")}
                >
                  Course Content
                </button>
                <button
                  className={`border-b-2 pb-2 -mb-px font-inter font-semibold duration-300 ease-in-out ${
                    activeTab === "About"
                      ? "border-dodgerBlue text-dodgerBlue"
                      : "text-mistBlue"
                  }`}
                  onClick={() => setActiveTab("About")}
                >
                  About
                </button>
                <button
                  className={`border-b-2 -mb-px pb-2 font-inter font-semibold duration-300 ease-in-out ${
                    activeTab === "Q&A"
                      ? "border-dodgerBlue text-dodgerBlue"
                      : "text-mistBlue"
                  }`}
                  onClick={() => setActiveTab("Q&A")}
                >
                  Q&A
                </button>
              </div>
              <div className="py-6">{renderContent()}</div>
            </div>
          </div>
        </div>
        <div className="sm:hidden lg:block sm:w-0 lg:w-[36vw] pl-10 pr-14">
          <RightPanelContent
            chapters={courseData.chapters}
            isSubscribed={courseData.is_subscribed}
            pricing={courseData.pricing}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
