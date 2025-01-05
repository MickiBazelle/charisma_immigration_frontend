import React from "react";
import { Img } from "../../../../components/website/Img";
import { CiFileOn } from "react-icons/ci";
import upload from "../../../../assets/imgs/website/upload.png";
import cursor from "../../../../assets/imgs/website/cursor.png";

function PhotoUpload() {
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length > 0) {
      const file = files[0];
      // Here you can add your file upload logic

      // You might want to add additional checks for file type and size here
    }
  };
  return (
    <div
      className="relative py-3.5 border-2 cursor-pointer border-dodgerBlue ml-6 w-full rounded-xl"
      style={{ width: "100%", height: "126px" }}
    >
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center rounded-md border-1 border-gray-300"
          style={{ height: "40px", width: "40px" }}
        >
          <Img
            className=""
            style={{ height: "15px", width: "17px" }}
            src={upload}
          />
        </div>
        <div className="mt-3">
          <div className="flex items-center">
            <p className="font-inter font-normal">
              <span
                className="text-dodgerBlue font-semibold"
                style={{ fontSize: "14px" }}
              >
                Click to upload
              </span>
              <span
                className="ml-1 text-riverBed font-normal"
                style={{ fontSize: "14px" }}
              >
                or drag and drop
              </span>
            </p>
          </div>

          <div
            className="text-riverBed font-normal"
            style={{ fontSize: "14px" }}
          >
            SVG, PNG, JPG or GIF (max. 800x400px)
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-2">
        <CiFileOn className="" style={{ height: "40px", width: "32px" }} />
        <div className="absolute bottom-3 -left-1 flex items-center justify-center bg-dodgerBlue w-[20px] h-[14px]">
          <div
            className="font-inter text-white font-semibold flex items-center justify-center"
            style={{ fontSize: "8px", height: "16px", width: "26px" }}
          >
            JPG
          </div>
        </div>
        <Img
          className="absolute -bottom-0 right-1"
          src={cursor}
          style={{ height: "12px", width: "13px" }}
        />
      </div>
    </div>
  );
}

export default PhotoUpload;
