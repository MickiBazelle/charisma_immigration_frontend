import { Link } from "react-router-dom";
import SubMenuItem from "./SubmenuItem";

const SubMenu = ({ menus }) => {
  return (
    <ul class="sub-menu" aria-expanded="false">
      <SubMenuItem />
    </ul>
  );
};

// function SubMenu({ menus }) {
//   const sideBarLinkStyle = {
//     textDecoration: "none",
//   };

//   return (
//     <ul class="sub-menu" aria-expanded="false">
//       {menus.map((SubMenuItem, index) => {
//         <SubMenuItem key={index} />;
//       })}
//     </ul>
//   );
// }

export default SubMenu;
