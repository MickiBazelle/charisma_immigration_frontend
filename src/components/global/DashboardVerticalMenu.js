import { Link } from "react-router-dom";

function DashboardVerticalMenu() {
  const sideBarLinkStyle = {
    textDecoration: "none",
  };
  return (
    <div class="vertical-menu">
      <div class="navbar-brand-box"></div>

      <button
        type="button"
        class="btn btn-sm px-3 header-item vertical-menu-btn topnav-hamburger"
      >
        <span class="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <div data-simplebar class="sidebar-menu-scroll">
        <div id="sidebar-menu">
          <ul class="metismenu list-unstyled" id="side-menu">
            <li class="menu-title" data-key="t-menu">
              Menu
            </li>

            <li>
              <Link to="/" style={sideBarLinkStyle}>
                <i class="icon nav-icon" data-eva="grid-outline"></i>
                <span class="menu-item" data-key="t-dashboards">
                  Dashboards
                </span>
                <span class="badge rounded-pill bg-primary">3</span>
              </Link>
            </li>

            <li class="menu-title" data-key="t-applications">
              Applications
            </li>
            <li>
              <Link to="" style={sideBarLinkStyle}>
                <i class="icon nav-icon" data-eva="award-outline"></i>
                <span class="menu-item" data-key="t-authentication">
                  Courses
                </span>
                <span class="badge rounded-pill bg-info">8</span>
              </Link>
              <ul class="sub-menu" aria-expanded="false">
                <li>
                  <Link
                    to="/accounts/courses/"
                    data-key="t-ecommerce"
                    style={sideBarLinkStyle}
                  >
                    Course List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accounts/courses/add"
                    data-key="t-saas"
                    style={sideBarLinkStyle}
                  >
                    Add Course
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="" style={sideBarLinkStyle}>
                <i class="icon nav-icon" data-eva="person-done-outline"></i>
                <span class="menu-item" data-key="t-authentication">
                  Users
                </span>
              </Link>
            </li>
            <li>
              <Link href="" style={sideBarLinkStyle}>
                <i class="icon nav-icon" data-eva="file-text-outline"></i>
                <span class="menu-item" data-key="t-authentication">
                  Reports
                </span>
              </Link>
            </li>
            <li>
              <Link href="" style={sideBarLinkStyle}>
                <i class="icon nav-icon" data-eva="file-text-outline"></i>
                <span class="menu-item" data-key="t-authentication">
                  Billing
                </span>
              </Link>
            </li>

            <li class="menu-title" data-key="t-applications">
              Staff
            </li>

            <li>
              <Link href="" style={sideBarLinkStyle}>
                <i class="icon nav-icon" data-eva="person-done-outline"></i>
                <span class="menu-item" data-key="t-authentication">
                  Register
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div class="p-3 px-4 sidebar-footer">
          <p class="mb-1 main-title">
            <script>document.write(new Date().getFullYear())</script> &copy;
            Kriss&Kay.
          </p>
          <p class="mb-0">Design & Developed by Kriss</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardVerticalMenu;
