import { Link } from "react-router-dom";
import { useState } from "react";

function UserSidebarItem({
  label,
  icon,
  isExpandable,
  isSelected,
  submenu,
  onClick,
  openSidebar,
}) {
  const sideBarLinkStyle = {
    textDecoration: "none",
  };
  const [isItemActive, setIsItemActive] = useState(false);

  const linkClick = (e) => {
    e.stopPropagation();
    setIsItemActive(isSelected);
    onClick();
  };

  return (
    <li>
      <div
        className={`mb-2 cursor-pointer hover:rounded-lg ${
          isSelected && `bg-newGray border-w rounded-lg`
        }`}
      >
        <div
          onClick={linkClick}
          style={sideBarLinkStyle}
          className="flex p-2.5 items-center gap-3"
        >
          {icon}
          {openSidebar ? (
            <span
              class="menu-item text-[#182230] font-inter font-medium"
              data-key="t-dashboards"
              style={{ fontSize: "16px" }}
            >
              {label}
            </span>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </li>
  );
}

export default UserSidebarItem;
