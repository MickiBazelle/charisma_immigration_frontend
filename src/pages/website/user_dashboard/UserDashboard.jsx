import { Img } from "../../../components/website/Img";
import UserSidebar from "./components/UserSidebar";
import search from "../../../assets/imgs/website/search.png";
import star from "../../../assets/imgs/website/star.png";
import { useState } from "react";
import CollapsibleCourseItem from "./components/CollapsibleCourseItem";
import CourseContent from "./components/CourseContent";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";

function MainContent({ sectionSelected }) {
  const renderContent = () => {
    switch (sectionSelected) {
      case "Dashboard":
        return <CourseContent />;
      case "Notifications":
        return <Notifications />;
      case "Settings":
        return <Settings />;
      case "Support":
        return <div>Support</div>;
      default:
        return <CourseContent />;
    }
  };

  return <div className="flex-1">{renderContent()}</div>;
}

function UserDashboard() {
  const [section, setSection] = useState("");
  return (
    <div className="flex">
      <UserSidebar onSelect={setSection} />
      <MainContent sectionSelected={section} />
    </div>
  );
}

export default UserDashboard;
