import React from "react";

function PaymentOption({ icon, name, isSelected, onOptionSelected, child }) {
  return (
    <div onClick={onOptionSelected} className="w-full">
      <div className="flex items-center gap-2 sm:gap-4 px-4 sm:px-8 md:px-[95px] mb-3">
        <input
          type="radio"
          name="options"
          value={name.toLowerCase()}
          checked={isSelected}
          onChange={onOptionSelected}
          className="w-4 h-4"
        />
        <div className="text-xl sm:text-2xl">{icon}</div>
        <div className="font-inter font-semibold text-sm sm:text-base text-purpleShadeBush">
          {name}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height ease-in-out duration-500 
            ${isSelected ? "max-h-[800px]" : "max-h-0"}`}
      >
        <div className="px-4 sm:px-8 md:px-[95px]">{child}</div>
      </div>
    </div>
  );
}

export default PaymentOption;
