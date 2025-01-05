import { useState, useEffect, useRef } from "react";
import MainContent from "../../components/global/MainContent";
import axiosInstance from "../../axios";
import FormPanel from "../../components/global/FormPanel";

import { Helmet } from "react-helmet";
import TestimonialForm from "./components/TestimonialForm";
import TestimonialList from "./components/TestimonialList";
import ListFilter from "../../components/ListFilter";
import AlertComponent from "../../components/global/AlertComponent";
import { PageSizeDropDown } from "../../components/PageSizeDropDown";
import { Shimmer } from "../../components/Shimmer";
import { toast, ToastContainer } from "react-toastify";

function TestimonialsAdmin() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [selectedItem, setSelectedItem] = useState("10 Items per page");
  const dropdownRef = useRef(null);

  const notify = (message) => toast.error(message);

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    fetchTestimonials();
  };

  const [isLoading, setIsLoading] = useState(false);
  const [loadedTestimonials, setLoadedTestimonials] = useState([]);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.cuurent.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleItemClick = (itemsPerPage) => {
    setSelectedItem(itemsPerPage);
    setIsDropdownOpen(false);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleItemDelete = (item) => {
    //item.preventDefault();
    //axiosInstance.delete(`/accounts/category/${item.pk}/delete/`);
  };

  const fetchTestimonials = async () => {
    setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);
    axiosInstance
      .get("/testimonials/")
      .then((res) => {
        const testimonials = [];
        const mData = res.data.data;
        for (const key in mData) {
          const testimonial = {
            id: key,
            ...mData[key],
          };

          testimonials.push(testimonial);
        }
        setIsLoading(false);
        setLoadedTestimonials(testimonials);
      })
      .catch((error) => {
        setIsLoading(false);
        
        const errorData = error.response.data;
        notify(`Error: ${error.response}`);
      });
  };

  const handleOnRefresh = () => {
    fetchTestimonials();
  };

  const handleAddTestimonial = async (formData) => {
    setIsLoading(true);
    axiosInstance
      .post("/accounts/testimonials/", formData)
      .then(async (res) => {
        await fetchTestimonials();
        toast.success("Testimonial Created successfully");
        // setAlertMessage("Testimonial added successfully");
        setIsFormOpen(false);
      })
      .catch((error) => {
        setIsLoading(false);
        const errorData = error.response.data;
        notify(`Error: ${errorData.message}`);
        
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    handleOutsideClick();
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <Helmet></Helmet>
      {showAlert && <AlertComponent />}
      <ToastContainer pauseOnHover theme="colored" />
      <FormPanel
        title="Add Testimonial"
        isOpen={isFormOpen}
        onClose={closeForm}
      >
        <TestimonialForm onFormSubmit={handleAddTestimonial} />
      </FormPanel>

      <MainContent
        title="Testimonials"
        headerChildren={
          <button
            class="btn btn-primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={openForm}
          >
            Add New Testimonial
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
                              tabindex="0"
                              style={{ minWidth: "88px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Name
                              </div>
                            </th>
                            <th
                              data-column-id="location"
                              className="gridjs-th gridjs-th-sort"
                              tabindex="0"
                              style={{ minWidth: "188px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Location
                              </div>
                            </th>
                            <th
                              data-column-id="testimonial"
                              className="gridjs-th gridjs-th-sort"
                              tabindex="0"
                              style={{ minWidth: "130px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Testimonial
                              </div>
                            </th>
                            <th
                              data-column-id="created_on"
                              className=" gridjs-th gridjs-th-sort"
                              tabindex="0"
                              style={{ minWidth: "120px", width: "169px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Created
                              </div>
                            </th>
                          </tr>
                        </thead>

                        {isLoading ? (
                          <Shimmer />
                        ) : (
                          <TestimonialList
                            adminTestimonials={loadedTestimonials}
                            onItemClick={handleItemDelete}
                          />
                        )}
                      </table>
                      <div className="gridjs-footer">
                        <div className="gridjs-pagination">
                          <div
                            role="status"
                            aria-live="polite"
                            className="gridjs-summary text-smoke"
                            title="Page 1 of 2"
                          >
                            Showing <b>1</b> to <b>5</b> of <b>10</b> results
                          </div>
                          <div className="gridjs-pages">
                            <button
                              tabindex="0"
                              disabled=""
                              title="Previous"
                              aria-label="Previous"
                              className="text-smoke"
                            >
                              Previous
                            </button>
                            <button
                              tabindex="0"
                              className="gridjs-currentPage"
                              title="Page 1"
                              aria-label="Page 1"
                            >
                              1
                            </button>
                            <button
                              tabindex="0"
                              className="text-smoke"
                              title="Page 2"
                              aria-label="Page 2"
                            >
                              2
                            </button>
                            <button
                              tabindex="0"
                              title="Next"
                              aria-label="Next"
                              className="text-smoke"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
      </MainContent>
    </div>
  );
}

export default TestimonialsAdmin;
