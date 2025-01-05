import container from "./WebsiteLayout.module.css";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import QueryString from "query-string";
import { ToastContainer } from "react-toastify";

function WebsiteLayout() {
  const location = useLocation();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);
    const values = QueryString.parse(location.search);

    if (values.success) {
    }

    if (values.canceled) {
    }
  }, []);
  return (
    <div>
      <ToastContainer pauseOnHover theme="colored" />
      <div className={container}>
        <div className="flex flex-col items-center bg-white "></div>
      </div>
      <Outlet />
    </div>
  );
}

export default WebsiteLayout;
