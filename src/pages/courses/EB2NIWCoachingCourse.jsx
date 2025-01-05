import React, { useEffect, useState } from "react";
import { PaginationCard } from "../../components/dashboard/PaginationCard";
import FormPanel from "../../components/global/FormPanel";
import MainContent from "../../components/global/MainContent";
import ListFilter from "../../components/ListFilter";
import { PageSizeDropDown } from "../../components/PageSizeDropDown";
import { Shimmer } from "../../components/Shimmer";
import axiosInstance from "../../axios";
import config from "../../config";
import EB2NIWCoachingModuleList from "./components/EB2NIWCoachingModuleList";

const EB2NIWCoachingCourse = () => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSizes = [10, 20, 50, 100];

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    fetchCourse();
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loadedCourse, setLoadedCourse] = useState([]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleModuleDelete = (moduleId) => {
    setIsDeleting(true);

    const id = moduleId.toString();
    axiosInstance
      .delete(`/accounts/courses/1/modules/${id}/delete`)
      .then(async (res) => {
        setIsDeleting(false);
        await fetchCourse();
      })
      .catch((error) => {
        setIsDeleting(false);
      });
  };
  // Helper function to introduce a delay

  const fetchCourse = async () => {
    setIsLoading(true);
    const pageSizeNum = pageSize.toString();
    await axiosInstance
      .get("/accounts/courses/1/modules/")
      .then((res) => {
        const modules = [];
        const mData = res.data.data;

        const mPagination = res.data.pagination;
        for (const key in mData) {
          const module = {
            id: key,
            ...mData[key],
          };

          setTotalPages(Math.ceil(mPagination.total_pages));
          setTotalItems(mPagination.total_items);
          modules.push(module);
        }

        setIsLoading(false);
        setLoadedCourse(modules);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const onDeleteModule = (moduleId) => {
    const id = moduleId.toString();
    axiosInstance
      .delete(`/accounts/courses/1/modules/${id}/delete`)
      .then((res) => {
        fetchCourse();
      })
      .catch((error) => {});
  };

  const handleAddCourse = async (formData) => {
    const course = { course: { ...formData } };
    axiosInstance
      .post("/accounts/users/", course)
      .then(async (res) => {
        await fetchCourse();
        setIsFormOpen(false);
      })
      .catch((error) => {});
  };

  const handleOnRefresh = () => {
    setIsLoading(true);
    fetchCourse();
  };

  useEffect(() => {
    fetchCourse();
  }, [currentPage, pageSize]);

  return (
    <div>
      <FormPanel title="Add Course" isOpen={isFormOpen} onClose={closeForm}>
        {/* <CourseForm onFormSubmit={handleAddCourse} /> */}
      </FormPanel>
      <MainContent
        title="Admin"
        headerChildren={
          <button
            class="btn btn-primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={openForm}
          >
            Add Admin Course
          </button>
        }
      >
        <div class="row">
          <div className="col-lg-12">
            <div class="flex-row mx-4 mt-4">
              <div className="flex justify-between">
                <div class="gridjs-search">
                  <input
                    type="search"
                    placeholder="Search admin..."
                    aria-label="Search admin..."
                    class="gridjs-input gridjs-search-input h-10 font-inter"
                  />
                </div>
                <div className="flex">
                  <ListFilter isLoading={isLoading} onClick={handleOnRefresh} />
                  <PageSizeDropDown
                    page_sizes={[10, 20, 50, 100]}
                    page={pageSize}
                    onItemClicked={handlePageSizeChange}
                  />
                </div>
              </div>

              <div className="card-body rounded">
                <div id="table-sorting">
                  <div
                    role="complementary"
                    className="gridjs gridjs-container mt-3"
                    style={{ width: "100%", borderRadius: "8px" }}
                  >
                    <div className="gridjs-wrapper" style={{ height: "auto" }}>
                      <table
                        role="grid"
                        className="gridjs-table"
                        style={{ height: "auto" }}
                      >
                        <thead className="gridjs-thead">
                          <tr className="gridjs-tr">
                            <th
                              data-column-id="name"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "88px" }}
                            >
                              <div className="gridjs-th-content text-smoke font-inter">
                                Module
                              </div>
                            </th>
                            {/* <th
                              data-column-id="email"
                              className="gridjs-th gridjs-th-sort font-inter"
                              tabIndex="0"
                              style={{ minWidth: "188px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Status
                              </div>
                            </th> */}
                            {/* <th
                          data-column-id="description"
                          className="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style={{ minWidth: "248px", width: "350px" }}
                        >
                          <div className="gridjs-th-content">
                            Description
                          </div>
                        </th> */}
                            <th
                              data-column-id="created_on"
                              className="gridjs-th gridjs-th-sort font-inter"
                              tabIndex="0"
                              style={{ minWidth: "130px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Created on
                              </div>
                            </th>
                            <th
                              data-column-id="created_on"
                              className=" gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "120px", width: "169px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Status
                              </div>
                            </th>
                            <th
                              data-column-id="created_on"
                              className=" gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "120px", width: "169px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Action
                              </div>
                            </th>
                          </tr>
                        </thead>
                        {isLoading ? (
                          <Shimmer />
                        ) : (
                          <EB2NIWCoachingModuleList
                            modules={loadedCourse}
                            onDeleteModule={handleModuleDelete}
                            isDeleting={isDeleting}
                          />
                        )}
                        <thead className="">
                          <tr className="gridjs-tr">
                            <th
                              data-column-id="name"
                              className="px-2 py-3"
                              tabIndex="0"
                              style={{ minWidth: "88px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Name
                              </div>
                            </th>
                            <th
                              data-column-id="email"
                              className="px-2 py-3"
                              tabIndex="0"
                              style={{ minWidth: "188px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Email
                              </div>
                            </th>
                            {/* <th
                          data-column-id="description"
                          className="gridjs-th gridjs-th-sort"
                          tabIndex="0"
                          style={{ minWidth: "248px", width: "350px" }}
                        >
                          <div className="gridjs-th-content">
                            Description
                          </div>
                        </th> */}
                            <th
                              data-column-id="created_on"
                              className="px-2 py-3"
                              tabIndex="0"
                              style={{ minWidth: "130px" }}
                            >
                              <div className="gridjs-th-content text-smoke font-inter">
                                Created on
                              </div>
                            </th>
                            <th
                              data-column-id="created_on"
                              className="px-2 py-3"
                              tabIndex="0"
                              style={{ minWidth: "120px", width: "169px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Status
                              </div>
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <PaginationCard pageSize={pageSize} totalItems={totalItems} />
            </div>
          </div>
        </div>

        <br />
      </MainContent>
    </div>
  );
};

export default EB2NIWCoachingCourse;
