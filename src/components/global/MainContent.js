import "./MainContent.module.css";
import MainContentHeader from "./MainContentHeader";

function MainContent({ title, headerChildren, children }) {
  return (
    <div class="main-content bg-mirage">
      <div className="page-content mt-[70px]">
        <div className="flex bg-ebonyClay justify-between mt-4 pb-3 border-b-1">
          <h2 className="text-smoke ml-2">{title}</h2>
          <div className="mr-5">{headerChildren}</div>
        </div>
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
}

export default MainContent;
