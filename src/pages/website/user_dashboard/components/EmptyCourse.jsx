import React from "react";
import { useUserStore } from "../../../../store/auth2";
import { Link } from "react-router-dom";

function EmptyCourse() {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <svg
        className="w-24 h-24 mb-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        ></path>
      </svg>
      <h2 className="text-2xl font-bold mb-2">No Courses Yet</h2>
      <p className="text-gray-600 mb-4">
        Hi {user?.fullName}, you haven't subscribed to the course yet.
      </p>
      <Link
        to="/courses"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        Explore Courses
      </Link>
    </div>
  );
}

export default EmptyCourse;
