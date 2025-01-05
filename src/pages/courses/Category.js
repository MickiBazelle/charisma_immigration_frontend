import { useState, useEffect } from "react";
import MainContent from "../../components/global/MainContent";
import axiosInstance from "../../axios";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import RightSidebar from "../../components/global/RightSidebar";
import FormPanel from "../../components/global/FormPanel";
import CategoryForm from "../../components/category/CategoryForm";
import { Helmet } from "react-helmet";
import MainContentHeader from "../../components/global/MainContentHeader";

function Category() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

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

  const fetchCategories = async () => {
    setIsLoading(true);
    axiosInstance
      .get("/accounts/category/")
      .then((res) => {
        const categories = [];
        for (const key in res.data) {
          const category = {
            id: key,
            ...res.data[key],
          };
          categories.push(category);
        }
        setIsLoading(false);
        setLoadedCategories(categories);
      })
      .catch((error) => {});
  };

  const handleAddCategory = async (formData) => {
    axiosInstance
      .post("/accounts/category/", formData)
      .then(async (res) => {
        await fetchCategories();
        setIsFormOpen(false);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCategories();
  }, []);

  return (
    <div>
      <Helmet></Helmet>
      <FormPanel title="Add Category" isOpen={isFormOpen} onClose={closeForm}>
        <CategoryForm onFormSubmit={handleAddCategory} />
      </FormPanel>
      <MainContent
        title="Category"
        headerChildren={
          <button
            class="btn btn-primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={openForm}
            style={{ float: "right" }}
          >
            Add Category
          </button>
        }
      >
        <div></div>
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

            <div className="card-body">
              <div id="table-sorting">
                <div
                  role="complementary"
                  className="gridjs gridjs-container mx-3 mt-3"
                  style={{ width: "100%" }}
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
                            data-column-id="id"
                            className="gridjs-th gridjs-th-sort"
                            tabIndex="0"
                            style={{ minWidth: "88px", width: "124px" }}
                          >
                            <div className="gridjs-th-content text-smoke">
                              Id
                            </div>
                          </th>
                          <th
                            data-column-id="title"
                            className="gridjs-th gridjs-th-sort"
                            tabIndex="0"
                            style={{ minWidth: "188px", width: "265px" }}
                          >
                            <div className="gridjs-th-content text-smoke">
                              Title
                            </div>
                          </th>
                          <th
                            data-column-id="description"
                            className="gridjs-th gridjs-th-sort"
                            tabIndex="0"
                            style={{ minWidth: "248px", width: "350px" }}
                          >
                            <div className="gridjs-th-content text-smoke">
                              Description
                            </div>
                          </th>
                          <th
                            data-column-id="created_by"
                            className="gridjs-th gridjs-th-sort"
                            tabIndex="0"
                            style={{ minWidth: "130px", width: "183px" }}
                          >
                            <div className="gridjs-th-content text-smoke">
                              Created by
                            </div>
                          </th>
                          <th
                            data-column-id="created_on"
                            className=" gridjs-th gridjs-th-sort"
                            tabIndex="0"
                            style={{ minWidth: "120px", width: "169px" }}
                          >
                            <div className="gridjs-th-content text-smoke">
                              Created on
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <CategoryList
                        categories={loadedCategories}
                        onItemClick={handleItemDelete}
                      />
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
                            tabIndex="0"
                            role="button"
                            disabled=""
                            title="Previous"
                            aria-label="Previous"
                            className="text-smoke"
                          >
                            Previous
                          </button>
                          <button
                            tabIndex="0"
                            role="button"
                            className="gridjs-currentPage text-smoke"
                            title="Page 1"
                            aria-label="Page 1"
                          >
                            1
                          </button>
                          <button
                            tabIndex="0"
                            role="button"
                            className="text-smoke"
                            title="Page 2"
                            aria-label="Page 2"
                          >
                            2
                          </button>
                          <button
                            tabIndex="0"
                            role="button"
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
        <div class="row">
          <div class="col-lg-12">
            <div id="gridjs-temp" className="gridjs-temp"></div>
          </div>
        </div>
      </MainContent>
    </div>
  );
}

export default Category;
