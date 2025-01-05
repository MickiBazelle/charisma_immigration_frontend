import MainContent from "../../components/global/MainContent";
import FormPanel from "../../components/global/FormPanel";
import "../../assets/css/dashboard_styles.css";
import classes from "./Category.module.css";
import CourseListItem from "./components/CourseListItem";
import { useState } from "react";

import React from "react";
import CourseForm from "./components/CourseForm";

const PaginationButton = ({ children }) => (
  <div className="justify-center items-center px-0 bg-emerald-400 rounded-lg h-[30px] w-[30px]">
    {children}
  </div>
);

const DataDisplay = () => {
  return (
    <div
      className="flex gap-5 justify-between px-5 my-4 text-emerald-400 max-md:flex-wrap"
      style={{ marginBottom: "1rem" }}
    >
      <div className="flex-auto my-auto text-sm text-smoke">
        <span className="text-zinc-400">Showing </span>
        <span className="font-semibold text-emerald-400">1-6</span>
        <span className="text-zinc-400"> from </span>
        <span className="font-semibold text-emerald-400">100</span>
        <span className="text-zinc-400"> data</span>
      </div>
      <div className="flex gap-2 text-lg whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09fb354da60723d909108c4f0605dbfd74aa71cb8e1f955a3df35910f10ec6b7?apiKey=c9788533178a4027a387d37dd621471a&"
          alt="Navigation icon"
          className="shrink-0 my-auto w-8 aspect-[0.97]"
        />
        <PaginationButton>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7177efccdbe0ecb48dee00dcdb189f0db927f3b9b277a72edfbe14c87943096?apiKey=c9788533178a4027a387d37dd621471a&"
          alt="Navigation icon"
          className="shrink-0 my-auto w-8 aspect-[0.97]"
        />
      </div>
    </div>
  );
};

function CoursesList() {
  const token = localStorage.getItem("token");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <FormPanel title="Add Course" isOpen={isFormOpen} onClose={closeForm}>
        <CourseForm />
      </FormPanel>
      <MainContent
        title="Courses"
        headerChildren={
          <button
            class="btn btn-primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={openForm}
            style={{ float: "right" }}
          >
            Add Course
          </button>
        }
      >
        <div class="row">
          <div className="col-lg-12">
            <div class="flex-row mx-4 mt-4">
              <div class="gridjs-search">
                <input
                  type="search"
                  placeholder="Search category..."
                  aria-label="Search category..."
                  class="gridjs-input gridjs-search-input"
                />
              </div>
            </div>
          </div>
        </div>
        <CourseListItem />
        <DataDisplay />
        <br />
      </MainContent>
    </>
  );
}

export default CoursesList;
