import React, { useState } from "react";
import MainContent from "../../components/global/MainContent";
import CourseForm from "./components/CourseForm";
import axiosInstance from "../../axios";
import EditCourseForm from "./components/EditCourseForm";

function EditModule({ module }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleAddModule = async (formData) => {
    setIsLoading(true);
    for (let [key, value] of formData.entries()) {
    }
    axiosInstance
      .update("/accounts/courses/1/modules/", formData)
      .then(async (res) => {
        setIsLoading(false);
        // await fetchUsers();
        // setIsFormOpen(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <MainContent title="Module">
        <div class="row">
          <div className="col-lg-12">
            <div class="flex-row mx-4 mt-4">
              <EditCourseForm
                onFormSubmit={handleAddModule}
                isLoading={isLoading}
                module={module}
              />
            </div>
          </div>
        </div>
        <br />
      </MainContent>
    </div>
  );
}

export default EditModule;
