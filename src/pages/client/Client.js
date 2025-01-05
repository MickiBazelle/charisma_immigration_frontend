import { useState, useEffect } from "react";
import MainContent from "../../components/global/MainContent";
import axiosInstance from "../../axios";

import { Helmet } from "react-helmet";
import ClientList from "./components/ClientList";

import ListFilter from "../../components/ListFilter";
import { PageSizeDropDown } from "../../components/PageSizeDropDown";
import { Shimmer } from "../../components/Shimmer";

function Client() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedClients, setLoadedClients] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    fetchClients();
  };

  const handleOnRefresh = () => {
    setIsLoading(true);
    fetchClients();
  };

  const handleItemDelete = (item) => {
    //
    //item.preventDefault();
    //axiosInstance.delete(`/accounts/category/${item.pk}/delete/`);
  };

  const fetchClients = async () => {
    setIsLoading(true);
    axiosInstance
      .get("/accounts/clients/")
      .then((res) => {
        const mData = res.data.data;
        const clients = [];
        for (const key in mData) {
          const client = {
            id: key,
            ...mData[key],
          };

          clients.push(client);
        }
        setIsLoading(false);
        setLoadedClients(clients);
      })
      .catch((error) => {});
  };

  const handleAddClient = async (formData) => {
    axiosInstance
      .post("/accounts/clients/", formData)
      .then(async (res) => {
        await fetchClients();
        setIsFormOpen(false);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    setIsLoading(true);
    fetchClients();
  }, []);

  return (
    <div>
      <Helmet></Helmet>
      <MainContent title="Clients">
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
                          <ClientList
                            adminClients={loadedClients}
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

export default Client;
