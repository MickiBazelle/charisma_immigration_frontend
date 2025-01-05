import React from "react";

function DialogModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-blacl/20" : "invisible"}`}
    ></div>
  );
}

export default DialogModal;
