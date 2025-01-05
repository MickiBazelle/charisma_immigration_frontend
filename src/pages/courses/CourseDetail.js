import React, { useEffect, useState } from "react";
import MainContent from "../../components/global/MainContent";
import axiosInstance from "../../axios";

const CourseInfo = ({ title, content }) => (
  <div>
    <div className="mt-5 text-2xl text-slate-700">{title}</div>
    <div className="mt-2 leading-8 text-base text-zinc-700">{content}</div>
  </div>
);

const ProgressBar = ({
  progressPercentage,
  label,
  completedParts,
  totalParts,
}) => (
  <div className="flex flex-col mb-4 px-6 py-2 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between pr-7 text-lg font-bold whitespace-nowrap text-slate-700 max-md:pr-5">
      <div className="flex-auto">{label}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c075eba6ef7431e350f8be64bc9666728696b79dc5a177eb367d019cf4541c9b?apiKey=c9788533178a4027a387d37dd621471a&"
        alt=""
        className="shrink-0 self-start w-6 aspect-square"
      />
    </div>
    <div className="flex flex-col justify-center items-start pr-16 mt-2 rounded bg-zinc-300 max-md:pr-5">
      <div
        className="shrink-0 h-2 bg-emerald-400 rounded"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
    <div className="flex gap-5 justify-between mt-2 text-xs font-semibold">
      <div className="flex-auto text-slate-700">{label}</div>
      <div className="text-right text-zinc-400">
        {completedParts}/{totalParts}
      </div>
    </div>
  </div>
);

const Detail = ({ courses }) =>
  courses.map((course) => (
    <div className="mb-3">
      <div
        key={course.id}
        className={`flex gap-5 justify-between px-6 py-3 text-lg text-white whitespace-nowrap rounded-2xl ${course.color} max-md:px-2`}
      >
        <div className="flex gap-2">
          <img
            loading="lazy"
            src={course.image}
            alt={course.alt}
            className="shrink-0 w-8 aspect-square"
          />
          <div className="flex-auto my-auto">{course.name}</div>
        </div>
        <div className="my-auto text-right">{course.duration}</div>
      </div>
    </div>
  ));

function CourseDetail() {
  const courseDetails = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/161216096e1751458a4d9f832c2b7658c5b4882e6a99bf7dc8662c34106d67a8?apiKey=c9788533178a4027a387d37dd621471a&",
      alt: "Introduction",
      name: "Introduction",
      duration: "1:00",
      color: "bg-emerald-400",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac5fa8d24e85fda8078e0aff1835836b446f2a0e9a8b10a11182c833672f50d?apiKey=c9788533178a4027a387d37dd621471a&",
      alt: "Getting Started",
      name: "Getting Started",
      duration: "1:00",
      color: "bg-zinc-300",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc01c89f86b16415d1d6e39bad88b527fa4192fdc50cf2c1c699aedfae404040?apiKey=c9788533178a4027a387d37dd621471a&",
      alt: "Tools",
      name: "Tools",
      duration: "1:00",
      color: "bg-zinc-300",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cc01c89f86b16415d1d6e39bad88b527fa4192fdc50cf2c1c699aedfae404040?apiKey=c9788533178a4027a387d37dd621471a&",
      alt: "Install Tools",
      name: "Install Tools",
      duration: "1:00",
      color: "bg-zinc-300",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/92343ebe8c9b930c567914e4d965a1053dec32380f69a51d0f2a968e679f6022?apiKey=c9788533178a4027a387d37dd621471a&",
      alt: "Plugins",
      name: "Plugins",
      duration: "1:00",
      color: "bg-zinc-300",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [courseDetail, setCourseDetail] = useState({});


  useEffect(() => {
    axiosInstance
      .get("/accounts/courses/1/detail")
      .then((res) => {

      })
      .catch((error) => {});
  });

  return (
    <MainContent>
      <div class="row">
        <div class="col-lg-12">
          <main
            className="flex gap-5 max-md:flex-col max-md:gap-0"
            style={{ marginTop: "8%" }}
          >
            <div className="card">
              <section className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
                <header className="flex flex-col grow px-5 mt-3 text-lg font-bold max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between text-3xl text-slate-700 max-md:flex-wrap max-md:max-w-full">
                    <h3 className="flex-auto max-md:max-w-full">
                      Full-Stack Web Developer
                    </h3>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ac4d7c848b978c6e0ffe6261e06eabc5f707e8cabb1ad0900cb4bde09894d1?apiKey=c9788533178a4027a387d37dd621471a&"
                      alt="Full-Stack Web Developer"
                      className="shrink-0 self-start max-w-full aspect-[5] w-[120px]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between self-start">
                    <p className="text-base text-zinc-400">Review (1k)</p>
                    <p className="text-base grow whitespace-nowrap text-slate-700">
                      120 Students
                    </p>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/518fd84664c7b0b7326da1bf9e19cecfee3a08154c033bf3c635c9f1e7b8423a?apiKey=c9788533178a4027a387d37dd621471a&"
                    alt="Course Content"
                    className="mt-2 w-full aspect-[1.79] max-md:max-w-full"
                  />
                  <nav className="flex gap-5 justify-between self-start mt-2 font-semibold whitespace-nowrap text-zinc-400">
                    <p className="text-emerald-400 text-base">About</p>
                    <p className="text-base">Reviews</p>
                    <p className=" text-base">Discussion</p>
                  </nav>
                  <div className="z-10 shrink-0 mt-3.5 bg-emerald-400 border-emerald-400 border-solid border-[3px] h-[1px] max-md:max-w-full" />
                  <CourseInfo
                    title="About Course"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  />
                </header>
              </section>
              <br />
            </div>

            <aside className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
              <section className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <ProgressBar
                  progressPercentage={9}
                  label="Progress"
                  completedParts="10"
                  totalParts="110"
                />
                <div className="flex flex-col shrink-0 px-6 py-6 bg-white rounded-2xl basis-0 w-fit ">
                  <h2 className="flex gap-2 justify-between w-full text-lg font-bold">
                    Video Courses
                  </h2>
                  <Detail courses={courseDetails} />
                </div>
              </section>
            </aside>
          </main>
        </div>
      </div>
      <br />
    </MainContent>
  );
}

export default CourseDetail;
