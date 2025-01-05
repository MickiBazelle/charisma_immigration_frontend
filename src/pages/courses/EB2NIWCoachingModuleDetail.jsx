import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import MainContent from "../../components/global/MainContent";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa6";
import { IoPauseSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import axiosInstance from "../../axios";

function EB2NIWCoachingModuleDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const [videoKey, setVideoKey] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [module, setModule] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef();

  const fetchModule = () => {
    setIsLoading(true);
    axiosInstance
      .get(`/accounts/courses/1/modules/${id}/detail`)
      .then((res) => {
        const data = res.data.data;
        const fetchedModule = {
          title: data.title,
          thumbnail: data.thumbnail,
          introVideo: data.intro_video,
          moduleStatus: data.module_status,
          combinedDurationText: data.combined_duration_text,
          overview: data.overview,
          // is_staff: mUser.user.is_staff,
          contents: data.contents,
          // created: mUser.created,
          // updated: mUser.updated,
        };
        setVideoUrl(data.intro_video);
        setVideoKey(data.module_id);
        setModule(fetchedModule);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error Fetching user details:", error);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchModule();
    videoRef.current?.load();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="text-smoke font-inter">
            Overview Content Communicate with your learners Easily interact with
            your learners through our Q&A, Messages and Assignments features.
          </div>
        );
      case "Reviews":
        return <div className="text-smoke font-inter">Reviews Content</div>;
      case "Discussion":
        return <div className="text-smoke font-inter">Discussion Content</div>;
      default:
        return null;
    }
  };

  const createVideoClickedHandler = (content) => {
    return (e) => handleVideoClicked(content, e);
  };

  const handleVideoClicked = (content, e) => {
    setVideoKey(content.content_id);
    setVideoUrl(content.video_file);
  };

  return (
    <div>
      <MainContent title="Module">
        <div class="row">
          <div className="col-lg-12">
            <div className="mt-4 mx-4">
              <div>
                <div className="text-smoke font-inter text-lg font-semibold">
                  {module.title}
                </div>
                <div className="flex text-center justify-between mt-2 w-72">
                  <div className="flex gap-2 items-center">
                    <div className="font-sm text-smoke font-inter">5.0</div>
                    <div>
                      <FaStar className="text-honeyWax" />
                    </div>
                  </div>
                  <div className="h-5 bg-gray-500 w-[1px]"></div>
                  <div className="font-sm text-smoke font-inter">
                    Reviews (1k)
                  </div>
                  <div className="h-5 bg-gray-500 w-[1px]"></div>
                  <div className="font-sm text-smoke font-inter">
                    2k Students
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 mt-4">
                <div className="col-span-2">
                  <video
                    key={videoKey}
                    //ref={videoRef}
                    controls
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "450px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    className="mb-4 shadow-md"
                  >
                    <source src={videoUrl} />
                  </video>
                </div>
                <div className="col-span-1 h-[450px] rounded-xl bg-ebonyClay overflow-auto scrollbar-thin scrollbar-thumb-gray-500">
                  <div className="px-4 py-4">
                    <div className="font-inter text-smoke font-semibold text-base">
                      Video Modules
                    </div>
                    <div>
                      <div className="flex flex-col gap-3 pt-4">
                        {module.contents &&
                          module.contents.length &&
                          module.contents.map((content, index) => (
                            <div
                              key={index}
                              className="flex px-3 cursor-pointer gap-2 justify-between items-center rounded-xl w-full h-16 bg-mint"
                              onClick={() => handleVideoClicked(content)}
                            >
                              <div className="flex justify-start items-center gap-2">
                                <div className="flex justify-center items-center h-6 w-6 rounded-full bg-gray-300">
                                  <div className="text-sm text-mint">
                                    <FaPlay className="h-3 w-3" />
                                  </div>
                                </div>
                                <div className="text-xsm text-smoke font-inter w-48 truncate">
                                  {content.title}
                                </div>
                              </div>

                              <div className="text-xsm text-smoke font-inter">
                                {content.content_duration}
                              </div>
                            </div>
                          ))}

                        {/* <div className="rounded-xl w-full h-16 bg-gray-500"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 w-full max-w-md">
                <div className="flex border-b">
                  <button
                    className={`py-2 px-4 -mb-px border-b-2 ${
                      activeTab === "Overview"
                        ? "border-mint text-mint"
                        : "border-transparent text-gray-500"
                    }`}
                    onClick={() => setActiveTab("Overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`py-2 px-4 -mb-px border-b-2 ${
                      activeTab === "Reviews"
                        ? "border-mint text-mint"
                        : "border-transparent text-gray-500"
                    }`}
                    onClick={() => setActiveTab("Reviews")}
                  >
                    Reviews
                  </button>
                  <button
                    className={`py-2 px-4 -mb-px border-b-2 ${
                      activeTab === "Discussion"
                        ? "border-mint text-mint"
                        : "border-transparent text-gray-500"
                    }`}
                    onClick={() => setActiveTab("Discussion")}
                  >
                    Discussion
                  </button>
                </div>
              </div>
              <div className="py-4">{renderContent()}</div>
            </div>
          </div>
        </div>

        <br />
      </MainContent>
    </div>
  );
}

export default EB2NIWCoachingModuleDetail;
