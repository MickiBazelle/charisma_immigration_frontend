import { useState, useEffect } from "react";
import MainContent from "../../components/global/MainContent";
import axiosInstance from "../../axios";
import classes from "../courses/Category.module.css";

import { Link } from "react-router-dom";

import RightSidebar from "../../components/global/RightSidebar";
import FormPanel from "../../components/global/FormPanel";

import { Helmet } from "react-helmet";
import MainContentHeader from "../../components/global/MainContentHeader";
import AdminMessageList from "./components/MessageList";
import ListFilter from "../../components/ListFilter";
import { PageSizeDropDown } from "../../components/PageSizeDropDown";
import { Shimmer } from "../../components/Shimmer";

function Messages() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMessages, setLoadedMessages] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    fetchMessages();
  };

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

  const fetchMessages = async () => {
    setIsLoading(true);
    axiosInstance
      .get("/accounts/messages/")
      .then((res) => {
        const messages = [];
        const mData = res.data.data;

        for (const key in mData) {
          const message = {
            id: key,
            ...mData[key],
          };

          messages.push(message);
        }
        setIsLoading(false);
        setLoadedMessages(messages);
      })
      .catch((error) => {});
  };

  const handleOnRefresh = () => {
    setIsLoading(true);
    fetchMessages();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMessages();
  }, []);

  return (
    <div>
      <Helmet></Helmet>
      <FormPanel
        title="Add Message"
        isOpen={isFormOpen}
        onClose={closeForm}
      ></FormPanel>
      <MainContent
        title="Messages"
        headerChildren={
          <button
            class="btn btn-primary"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={openForm}
          >
            Add Admin Message
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
              <div className="card-body">
                <div id="table-sorting">
                  <div
                    role="complementary"
                    className="gridjs gridjs-container mt-3 rounded-lg"
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
                              data-column-id="name"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "88px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Name
                              </div>
                            </th>
                            <th
                              data-column-id="email"
                              className="gridjs-th gridjs-th-sort"
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
                              data-column-id="phone_number"
                              className=" gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "120px", width: "169px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Phone
                              </div>
                            </th>
                            <th
                              data-column-id="message"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "130px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Message
                              </div>
                            </th>
                            <th
                              data-column-id="created_on"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "130px" }}
                            >
                              <div className="gridjs-th-content text-smoke">
                                Created on
                              </div>
                            </th>
                          </tr>
                        </thead>
                        {isLoading ? (
                          <Shimmer cols={6} />
                        ) : (
                          <AdminMessageList
                            messages={loadedMessages}
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
                              tabIndex="0"
                              disabled=""
                              title="Previous"
                              aria-label="Previous"
                              className="text-smoke"
                            >
                              Previous
                            </button>
                            <button
                              tabIndex="0"
                              className="gridjs-currentPage"
                              title="Page 1"
                              aria-label="Page 1"
                            >
                              1
                            </button>
                            <button
                              tabIndex="0"
                              className="text-smoke"
                              title="Page 2"
                              aria-label="Page 2"
                            >
                              2
                            </button>
                            <button
                              tabIndex="0"
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

export default Messages;
