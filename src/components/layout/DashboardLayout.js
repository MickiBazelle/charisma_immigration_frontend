import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import DashboardTopBar from "../global/DashboardTopBar";
import HorizontalTopBarHeader from "../global/HorizontalTopBarHeader";
import Sidebar from "../global/Sidebar";
import RightSidebar from "../global/RightSidebar";
import CategoryForm from "../category/CategoryForm";

function DashboardLayout(props) {
  return (
    <div id="layout-wrapper">
      <Helmet>
        <body data-sidebar="dark" />
        <script
          src="../../assets/js/metismenujs/metismenujs.min.js"
          type="text/babel"
        ></script>
        <script src="../../assets/js/app.js" type="text/babel"></script>
        <script
          src="../../assets/js/simplebar/simplebar.min.js"
          type="text/babel"
        ></script>
      </Helmet>

      <DashboardTopBar />
      <Sidebar />
      <HorizontalTopBarHeader />
      {props.children}

      <Outlet />
    </div>
  );
}

export default DashboardLayout;
