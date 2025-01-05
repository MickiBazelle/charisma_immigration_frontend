import CollapsibleSidebarItem from "../dashboard/CollapsibleSidebarItem";
import { useState } from "react";
import MenuTitle from "./MenuTitle";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import CIHeader from "../website/navbar/CIHeader";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { GiPublicSpeaker } from "react-icons/gi";
import { TbMessage2Check } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { RiContactsBookFill } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiFileList3Fill } from "react-icons/ri";

function Sidebar() {
  const [sidebarItem, setSidebarItem] = useState("Dashboard");

  const handleNavbarItemSelected = (item) => {
    setSidebarItem(item);
  };

  return (
    <div class="vertical-menu" style={{ borderRight: "white" }}>
      <div className="flex flex-row header-item">
        <header className="flex gap-2 ml-4 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12dd5e3af54b379e77761855cea5b95b1e4c4db9a999c2cdd27f068b0c9978a1?apiKey=a66d85f6e040456098a52ab3f0f88e70&"
            alt="Logo"
            className="aspect-[1.04] w-[27px]"
          />
          <div className="grow mt-1 text-sm text-white">
            CharismaImmigrations
          </div>
        </header>
        <button
          type="button"
          class="btn btn-sm px-3 mt-1 header-item vertical-menu-btn topnav-hamburger"
        >
          <span class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <div data-simplebar class="sidebar-menu-scroll">
        <div id="" className="flex mx-2 mt-4">
          <ul class="metismenu list-unstyled" id="side-menu">
            <MenuTitle title="MENU" />
            <SidebarItem
              label="Dashboard"
              to="/accounts/dashboard/"
              icon={<MdDashboard className="text-gray-500" />}
              isSelected={sidebarItem === "Dashboard"}
              onClick={() => handleNavbarItemSelected("Dashboard")}
            />

            <MenuTitle title="APPLICATIONS" />
            <CollapsibleSidebarItem
              label="Courses"
              icon={<MdOutlinePlayLesson className="text-gray-500" />}
            >
              <div className="ml-[25px]">
                {/* <SidebarItem
                  label="Courses"
                  icon={<MdDashboard className="text-gray-500" />}
                  to="/accounts/courses/"
                  onClick={() => handleNavbarItemSelected("Courses")}
                  isSelected={sidebarItem === "Courses"}
                /> */}
                <SidebarItem
                  label="EB2 NIW Course"
                  icon={<RiFileList3Fill className="text-gray-500" />}
                  to="/accounts/eB2NIWCoachingCourse/"
                  onClick={() =>
                    handleNavbarItemSelected("EB2 NIW Coaching Course")
                  }
                  isSelected={sidebarItem === "EB2 NIW Coaching Course"}
                />

                <SidebarItem
                  label="Create Modules"
                  icon={<AiOutlineVideoCameraAdd className="text-gray-500" />}
                  to="/accounts/courses/module/add/"
                  onClick={() => handleNavbarItemSelected("Create Modules")}
                  isSelected={sidebarItem === "Create Modules"}
                />
              </div>
            </CollapsibleSidebarItem>
            <SidebarItem
              label="Clients"
              to="/accounts/clients/"
              icon={<FaPeopleArrows className="text-gray-500" />}
              isSelected={sidebarItem === "Clients"}
              onClick={() => handleNavbarItemSelected("Clients")}
            />
            <div className="">
              <SidebarItem
                label="Testimonials"
                to="/accounts/testimonials/"
                icon={<GiPublicSpeaker className="text-gray-500" />}
                isSelected={sidebarItem === "Testimonials"}
                onClick={() => handleNavbarItemSelected("Testimonials")}
              />
            </div>
            <div className="">
              <SidebarItem
                label="Bookings"
                to="/accounts/bookings/"
                icon={<IoCalendarOutline className="text-gray-500" />}
                isSelected={sidebarItem === "Bookings"}
                onClick={() => handleNavbarItemSelected("Bookings")}
              />
            </div>

            <div className="">
              <CollapsibleSidebarItem
                label="Contact"
                icon={<RiContactsBookFill className="text-gray-500" />}
              >
                <div className="ml-[25px]">
                  <SidebarItem
                    label="Messages"
                    to="/accounts/messages/"
                    icon={<TbMessage2Check className="text-gray-500" />}
                    isSelected={sidebarItem === "Messages"}
                    onClick={() => handleNavbarItemSelected("Messages")}
                  />
                </div>
              </CollapsibleSidebarItem>
            </div>

            <MenuTitle title="STAFF" />
            <CollapsibleSidebarItem
              label="Admins"
              icon={<MdOutlineAdminPanelSettings className="text-gray-500" />}
            >
              <div className="ml-[25px]">
                <SidebarItem
                  label="Users"
                  to="/accounts/users"
                  icon={<RiAdminLine className="text-gray-500" />}
                  isSelected={sidebarItem === "Users"}
                  onClick={() => handleNavbarItemSelected("Users")}
                />
              </div>
            </CollapsibleSidebarItem>
          </ul>
        </div>

        {/* <div class="p-3 px-4 sidebar-footer font-inter">
          <p class="mb-1 main-title">
            <script>document.write(new Date().getFullYear())</script> &copy;
            Kriss&Kay.
          </p>
          <p class="mb-0">Design & Developed by Kriss</p>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
