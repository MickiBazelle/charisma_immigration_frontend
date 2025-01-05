import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsTrash3Fill } from "react-icons/bs";
import Loader from "./Loader";

function CustomDialog({ open, onClose, onDelete, isDeleting, children }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      onClick={onClose}
      className={`pl-32 fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/70" : "invisible"}`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all 
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <div
          className="absolute top-2 right-2 p-1 rounded-lg"
          onClick={onClose}
        >
          <IoCloseSharp className="text-gray-400 hover:bg-gray-50 hover:text-gray-600" />
        </div>

        <div className="text-center w-80">
          <div className="flex mt-3 mx-auto justify-center items-center">
            <BsTrash3Fill className="w-16 h-16 text-btnDangerBG" />
          </div>
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="flex items-center justify-center btn btn-danger w-full"
              onClick={onDelete}
            >
              <div>Delete</div>
              {isDeleting === true ? (
                <div className="pl-1">
                  <Loader />
                </div>
              ) : (
                <div></div>
              )}
            </button>
            <button className="btn btn-light w-full" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDialog;
