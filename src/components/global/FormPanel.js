// FormPanel.js
import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard_styles.css";
import Overlay from "./Overlay";

const FormPanel = ({ title, isOpen, onClose, children }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      // document.body.classList.add("overflow-hidden");
    } else {
      // document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <div className="absolute top-0 right-0 h-full">
      <Overlay isOpen={isOpen} onClose={onClose} />
      <div
        className={`form-panel ${isOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="form-panel-content">
          <div className="flex justify-between items-baseline p-3 bg-altButtonColor">
            <h2 className="text-lg text-center font-bold text-white">
              {title}
            </h2>
            <button onClick={onClose} className="text-white hover:text-red-700">
              &times;
            </button>
          </div>
          <div className="px-3 pb-[200px] max-h-screen overflow-y-auto mt-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPanel;
