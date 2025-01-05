import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dateFormatter from "../../../utils/dateFormatter";
import logo2 from "./../../../assets/imgs/ci_logo2.png";
import { BsStopwatch } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import config from "../../../config";
import CustomDialog from "../../../components/global/CustomDialog";
import { BsTrash3Fill } from "react-icons/bs";
import axiosInstance from "../../../axios";

const ModuleStatus = ({ module }) => {

  if (module.module_status === "Draft") {
    return (
      <span class="badge rounded-md px-[10px] bg-honeyWax text-center font-inter">
        <p className="text-white font-medium">Draft</p>
      </span>
    );
  } else if (module.module_status === "Published") {
    return (
      <span class="badge rounded-md px-[10px] bg-grassGreen text-center font-inter">
        <p className="text-white font-medium">Published</p>
      </span>
    );
  } else {
    return (
      <span class="badge rounded-md px-[10px] bg-btnDangerBG text-center font-inter">
        <p className="text-white font-medium">Disabled</p>
      </span>
    );
  }
};

const EB2NIWCoachingModuleList = ({ modules, onDeleteModule, isDeleting }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleModuleDelete = (moduleId) => {};

  const handleEditOnClick = (module) => {
    navigate("/accounts/dashboard/");
  };

  return (
    <>
      <tbody className="gridjs-tbody">
        {modules.map((module, index) => (
          <tr key={index} className="">
            <td
              data-column-id="email"
              className="gridjs-td text-sm text-smoke font-inter"
            >
              <Link
                to={`/accounts/courses/1/modules/${module.id}/detail`}
                style={{ color: "#DFDFDF" }}
              >
                <div className="flex items-center">
                  <img
                    class="w-32 h-20 rounded-lg"
                    src={config.imageUrl + module.thumbnail}
                    alt="Default avatar"
                  />{" "}
                  <div>
                    <div className="text-smb font-semibold pl-4 font-inter">
                      {module.title}
                    </div>
                    <div className="flex text-xsm pl-4 font-inter items-center gap-1">
                      <BsStopwatch />
                      <div>{module.combined_duration_text}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </td>

            <td
              data-column-id="created_on"
              className="gridjs-td text-sm text-smoke font-inter"
            >
              <p
                className="text-truncate text-smoke"
                style={{
                  wordBreak: "break-all",
                  maxWidth: "200px",
                  fontWeight: "500",
                }}
              >
                {dateFormatter(module.created)}
              </p>
            </td>

            <td data-column-id="status" className="gridjs-td text-sm">
              <ModuleStatus module={module} />
            </td>

            <td
              data-column-id="email"
              className="gridjs-td text-sm text-smoke font-inter"
            >
              <div>
                <div className="flex gap-1 items-center">
                  <div
                    className="px-2 py-[4px] bg-honeyWax rounded-sm cursor-pointer"
                    onClick={handleEditOnClick}
                  >
                    <FaRegEdit className="text-smoke text-smb font-semibold" />
                  </div>
                  <div
                    className="px-2 py-[4px] bg-btnDangerBG rounded-sm cursor-pointer"
                    onClick={() => setOpenModal(true)}
                  >
                    <MdDeleteOutline className="text-smoke text-sm " />
                  </div>
                  <CustomDialog
                    open={openModal}
                    onDelete={() => onDeleteModule(module.id)}
                    isDeleting={isDeleting}
                    onClose={() => setOpenModal(false)}
                  ></CustomDialog>
                </div>
              </div>
              {/* <Link
                  href=""
                  class="text-smoke"
                  style={{ textDecoration: "none" }}
                >
        
                  <span class="badge bg-success text-center font-inter">
                    <p className="text-white">Active</p>
                  </span>
                </Link> */}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default EB2NIWCoachingModuleList;
