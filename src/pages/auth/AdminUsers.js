import { useState, useEffect, useRef } from "react";
import MainContent from "../../components/global/MainContent";
import axiosInstance from "../../axios";
import classes from "../courses/Category.module.css";

import { Link } from "react-router-dom";

import RightSidebar from "../../components/global/RightSidebar";
import FormPanel from "../../components/global/FormPanel";

import { Helmet } from "react-helmet";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import ListFilter from "../../components/ListFilter";
import { Shimmer } from "../../components/Shimmer";
import { simulateDelay } from "../../utils/delay";
import { PageSizeDropDown } from "../../components/PageSizeDropDown";
import { PaginationCard } from "../../components/dashboard/PaginationCard";

function AdminUsers() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSizes = [10, 20, 50, 100];

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    fetchUsers();
  };

  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleItemDelete = (item) => {
    //
    //item.preventDefault();
    //axiosInstance.delete(`/accounts/category/${item.pk}/delete/`);
  };
  // Helper function to introduce a delay

  const fetchUsers = async () => {
    setIsLoading(true);
    const pageSizeNum = pageSize.toString();
    await axiosInstance
      .get(`/accounts/users/?page_size=${pageSizeNum}`)
      .then((res) => {
        const users = [];
        const mData = res.data.data;
        const mPagination = res.data.pagination;
        for (const key in mData) {
          const user = {
            id: key,
            ...mData[key],
          };

          setTotalPages(Math.ceil(mPagination.total_pages));
          setTotalItems(mPagination.total_items);
          users.push(user);
        }
        setIsLoading(false);
        setLoadedUsers(users);
      })
      .catch((error) => {});
  };

  const handleAddUser = async (formData) => {
    const user = { user: { ...formData } };
    axiosInstance
      .post("/accounts/users/", user)
      .then(async (res) => {
        await fetchUsers();
        setIsFormOpen(false);
      })
      .catch((error) => {
        setIsFormOpen(false);
      });
  };

  const handleOnRefresh = () => {
    setIsLoading(true);
    fetchUsers();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
  }, [currentPage, pageSize]);

  return (
    <div>
      <Helmet></Helmet>
      <FormPanel title="Add User" isOpen={isFormOpen} onClose={closeForm}>
        <UserForm onFormSubmit={handleAddUser} />
      </FormPanel>
      <MainContent
        title="Admin"
        headerChildren={
          <button
            class="btn btn-primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={openForm}
          >
            Add Admin User
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
                                Name
                              </div>
                            </th>
                            <th
                              data-column-id="email"
                              className="gridjs-th gridjs-th-sort font-inter"
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
                          </tr>
                        </thead>
                        {isLoading ? (
                          <Shimmer />
                        ) : (
                          <UserList
                            adminUsers={loadedUsers}
                            onItemClick={handleItemDelete}
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
}

export default AdminUsers;
