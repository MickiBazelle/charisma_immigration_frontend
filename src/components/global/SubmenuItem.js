import { Link } from "react-router-dom";

function SubMenuItem({ label, to }) {
  const sideBarLinkStyle = {
    textDecoration: "none",
  };
  return (
    <li>
      <Link to={to} data-key="t-ecommerce" style={sideBarLinkStyle}>
        {label}
      </Link>
    </li>
  );
}

export default SubMenuItem;
