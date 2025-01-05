// Overlay.js
import React from "react";
import "../../assets/css/dashboard_styles.css";

const Overlay = ({ isOpen, onClose }) => {
  return (
    <div
      className={`overlay ${isOpen ? "block" : "hidden"}`}
      onClick={onClose}
    />
  );
};

export default Overlay;
