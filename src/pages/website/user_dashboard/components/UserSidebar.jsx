import React, { useState, useEffect } from "react";
import WebsiteLogo from "../../../../components/website/WebsiteLogo";
import search from "../../../../assets/imgs/website/search.png";
import { Img } from "../../../../components/website/Img";
import "../user_dashboard.css";
import UserSidebarItem from "./UserSidebarItem";
import notification from "../../../../assets/imgs/website/notification.png";
import dashboard from "../../../../assets/imgs/website/dashboard.png";
import settings from "../../../../assets/imgs/website/settings.png";
import support from "../../../../assets/imgs/website/support.png";
import profilePic from "../../../../assets/imgs/trans_badge.png";
import logout from "../../../../assets/imgs/website/logout.png";
import { FaChevronRight } from "react-icons/fa6";
import { useUserStore } from "../../../../store/auth2";

function UserSidebar({ onSelect }) {
  const [sidebarItem, setSidebarItem] = useState("Dashboard");
  const [openSidebar, setOpenSidebar] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { user } = useUserStore.getState();

    setUser(user);
  }, []);

  const handleSidebarItemSelected = (item) => {
    setSidebarItem(item);
    onSelect(item);
  };

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div
      className={`sm:hidden md:block relative h-screen duration-500 ease-in-out border-r-[1px]  border-dawnPink 
        ${openSidebar ? "w-[260px]" : "w-[90px]"}`}
      style={{ backgroundColor: "#fff" }}
    >
      <div className="ml-6 mt-8">
        <WebsiteLogo openSidebar={openSidebar} />
      </div>
      <div className="">
        <div
          className={`flex cursor-pointer absolute -right-3 items-center justify-center bg-white w-[20px] h-[20px] 
           border border-black rounded-full duration-500 transition-all ease-in-out`}
          onClick={handleOpenSidebar}
        >
          <FaChevronRight
            className={`h-[12px] w-[12px] ${!openSidebar && "rotate-180"}`}
          />
        </div>
      </div>
      <div className="mt-7 mx-6">
        {openSidebar ? (
          <div className="flex items-center">
            <Img
              className="ml-2 mt-1 h-[20px] w-[20px] absolute"
              src={search}
            />
            <input
              className="mt-2 px-[2.2rem] outline-none text-xsm rounded-lg w-full font-inter font-normal leading-5 text-slate-700 max-md:max-w-full"
              placeholder="Search"
              type="text"
              style={{ height: "44px", border: "1px solid #d0d5dd" }}
            ></input>
          </div>
        ) : (
          <Img className="ml-2 mt-[40px] h-[20px] w-[20px]" src={search} />
        )}

        <div className="mt-10 text-base">
          <ul class="metismenu list-unstyled">
            <UserSidebarItem
              label="Dashboard"
              icon={<Img className="h-[24px] w-[24px]" src={dashboard} />}
              isSelected={sidebarItem === "Dashboard"}
              onClick={() => handleSidebarItemSelected("Dashboard")}
              openSidebar={openSidebar}
            />
            <UserSidebarItem
              label="Notifications"
              icon={<Img className="h-[24px] w-[24px]" src={notification} />}
              isSelected={sidebarItem === "Notifications"}
              onClick={() => handleSidebarItemSelected("Notifications")}
              openSidebar={openSidebar}
            />
            <UserSidebarItem
              label="Settings"
              icon={<Img className="h-[24px] w-[24px]" src={settings} />}
              isSelected={sidebarItem === "Settings"}
              onClick={() => handleSidebarItemSelected("Settings")}
              openSidebar={openSidebar}
            />
            <div className="mt-[20.75rem]">
              <UserSidebarItem
                label="Support"
                icon={<Img src={support} className="w-[20px] h-[20px]" />}
                isSelected={sidebarItem === "Support"}
                onClick={() => handleSidebarItemSelected("Support")}
                openSidebar={openSidebar}
              />
              <div className="bg-dawnPink h-[1px] w-full"></div>
              <div className="flex items-center justify-between mt-[24px]">
                <div className="flex gap-2">
                  <Img src={profilePic} className="h-[40px] w-[40px]" />
                  {openSidebar ? (
                    <div className="font-inter">
                      <div className="font-medium" style={{ fontSize: "14px" }}>
                        {user && user.fullName}
                      </div>
                      <div className="font-normal" style={{ fontSize: "12px" }}>
                        {user && user.email}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div>
                  <Img
                    src={logout}
                    className={`transition-opacity duration-500 h-[20px] w-[20px] ${
                      openSidebar ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserSidebar;
