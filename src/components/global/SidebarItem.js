import { Link } from "react-router-dom";
import { useState } from "react";

function SidebarItem({
  label,
  to,
  icon,
  isExpandable,
  isSelected,
  submenu,
  onClick,
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
        className={`mb-2 ${
          isSelected && "bg-mirage border-w rounded-lg w-[220px]"
        }`}
        style={{ border: isSelected && "1px solid	#696969" }}
      >
        <Link
          to={to}
          onClick={linkClick}
          style={sideBarLinkStyle}
          className="flex p-2.5 items-center gap-3"
        >
          {icon}
          <span class="menu-item text-smoke font-inter" data-key="t-dashboards">
            {label}
          </span>
        </Link>
      </div>
    </li>
  );
}

export default SidebarItem;
