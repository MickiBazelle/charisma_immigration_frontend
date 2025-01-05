import React from "react";

const sizes = {
  xs: "text sm font-medium leading-[17px]",
  lg: "text-xl font-normal leading-[25px]",
  s: "text-base font-normal leading-5",
  xl: "text-4xl font-medium leading-[44px]",
  md: "text-lg font-medium leading-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-blue-gray-700_01 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
