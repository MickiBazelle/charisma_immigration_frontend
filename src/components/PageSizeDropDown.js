import React, { useState, useRef, useEffect } from "react";
import { RxCaretDown } from "react-icons/rx";

export const PageSizeDropDown = ({ page_sizes, page, onItemClicked }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toogleDropDownOpen = (e) => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (itemsPerPage) => {
    // setPageSize(itemsPerPage);
    setIsDropdownOpen(false);
    onItemClicked(itemsPerPage);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.cuurent.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    handleOutsideClick();
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <button
        class="relative flex items-center rounded-lg px-2 h-10 bg-buttonColor rounded-s-lg text-smoke"
        onClick={toogleDropDownOpen}
      >
        <span className="mr-2">{page} Items per page</span>
        <div className="h-full border-l border-blue-900"></div>
        <div>
          <RxCaretDown className="ml-1 w-[20px] h-[20px]" />
        </div>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-1 w-44 bg-mirage border border-red-800 rounded-md shadow-lg z-10">
          <div className="py-1">
            {page_sizes.map((page_size) => (
              <div
                onClick={(e) => handleItemClick(Number(page_size))}
                className="block px-3 py-2 text-smoke hover:bg-ebonyClay cursor-pointer"
              >
                {page_size} Items per page
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// export const PageSizeDropDown = ({ page_sizes, page, onItemClicked }) => {
//   const [pageSize, setPageSize] = useState(10);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const handleItemClick = (itemsPerPage) => {
//     setPageSize(itemsPerPage);
//     setIsDropdownOpen(false);
//     onItemClicked(itemsPerPage);
//   };

//   const toogleDropDownOpen = (e) => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleOutsideClick = (e) => {
//     if (dropdownRef.current && !dropdownRef.cuurent.contains(e.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     handleOutsideClick();
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);
//   return (
//     <div className="relative">
//       <button
//         class="relative flex items-center rounded-lg px-2 h-10 bg-buttonColor rounded-s-lg text-smoke"
//         onClick={toogleDropDownOpen}
//       >
//         <span className="mr-2">{pageSize} Items per page</span>
//         <div className="h-full border-l border-blue-900"></div>
//         <div>
//           <RxCaretDown className="ml-1 w-[20px] h-[20px]" />
//         </div>
//       </button>
//       {isDropdownOpen && (
//         <div className="absolute right-0 mt-1 w-44 bg-mirage border border-red-800 rounded-md shadow-lg z-10">
//           <div className="py-1">
//             <div
//               onClick={() => handleItemClick(10)}
//               className="block px-3 py-2 text-smoke hover:bg-ebonyClay cursor-pointer"
//             >
//               10 Items per page
//             </div>
//             <div
//               onClick={() => handleItemClick(20)}
//               className="block px-3 py-2 text-smoke hover:bg-ebonyClay cursor-pointer"
//             >
//               20 Items per page
//             </div>
//             <div
//               onClick={() => handleItemClick(50)}
//               className="block px-3 py-2 text-smoke hover:bg-ebonyClay cursor-pointer"
//             >
//               50 items per page
//             </div>
//             <div
//               onClick={() => handleItemClick(100)}
//               className="block px-3 py-2 text-smoke hover:bg-ebonyClay cursor-pointer"
//             >
//               100 items per page
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
