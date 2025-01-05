import React, { useState } from "react";
import MyDetails from "./MyDetails";
import Password from "./Password";

function Settings() {
  const [activeTab, setActiveTab] = useState("My details");

  const renderContent = () => {
    switch (activeTab) {
      case "My details":
        return <MyDetails />;
      case "Password":
        return <Password />;
      case "Plan":
        return (
          <div className="hidden">
            <div></div>;
          </div>
        );
      case "Billing":
        return (
          <div className="hidden">
            <div></div>;
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="h-full bg-alabaster">
      <div className=" mx-8 pt-8">
        <div
          className="font-inter  font-semibold text-mirage"
          style={{ fontSize: "30px" }}
        >
          Settings
        </div>
        <div className="mt-10">
          <div className="flex border-b gap-4">
            <button
              className={`border-b-2 pb-3 -mb-px font-inter font-semibold duration-300 ease-in-out ${
                activeTab === "My details"
                  ? "border-dodgerBlue text-dodgerBlue"
                  : "text-mistBlue"
              }`}
              onClick={() => setActiveTab("My details")}
            >
              My details
            </button>
            <button
              className={`border-b-2 -mb-px pb-3 font-inter font-semibold duration-300 ease-in-out ${
                activeTab === "Password"
                  ? "border-dodgerBlue text-dodgerBlue"
                  : "text-mistBlue"
              }`}
              onClick={() => setActiveTab("Password")}
            >
              Password
            </button>
            <button
              className={`border-b-2 pb-3 -mb-px font-inter font-semibold duration-300 ease-in-out ${
                activeTab === "Plan"
                  ? "border-dodgerBlue text-dodgerBlue"
                  : "text-mistBlue"
              }`}
              onClick={() => setActiveTab("Plan")}
            >
              Plan
            </button>
            <button
              className={`border-b-2 pb-3 -mb-px font-inter font-semibold duration-300 ease-in-out ${
                activeTab === "Billing"
                  ? "border-dodgerBlue text-dodgerBlue"
                  : "text-mistBlue"
              }`}
              onClick={() => setActiveTab("Billing")}
            >
              Billing
            </button>
          </div>
          <div className="py-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
