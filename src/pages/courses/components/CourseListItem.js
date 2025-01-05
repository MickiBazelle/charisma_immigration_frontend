import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import axiosInstance from "../../../axios";

function CourseListItem() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = async () => {
    axiosInstance
      .get("/accounts/courses/")
      .then((res) => {
        const returnedCourses = [];
        for (const key in res.data) {
          const course = {
            id: key,
            ...res.data[key],
          };
          returnedCourses.push(course);
          
        }
        setIsLoading(false);
        setCourses(returnedCourses);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCourses();
  }, []);

  return (
    <main className="">
      <section className="mt-4 px-2 w-full max-md:max-w-full">
        <div className="grid grid-cols-3 gap-3 max-md:flex-col max-md:gap-0">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CourseListItem;
