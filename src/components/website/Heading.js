import React from "react";
const sizes = {
  "3xl": "text-[28px] font-semibold leading-[34px]",
  "2xl": "text-2xl font-semibold leading-[30px]",
  xl: "text-xl font-semibold leading-[25px]",
  "5xl": "text-4xl font-semibold leading-[44px]",
  "4xl": "text-3xl font-semibold leading-[37px]",
  "7xl": "text-6xl font-semibold leading-[73px]",
  s: "text-sm font-semibold leading-[17px]",
  md: "text-base font-semibold leading-5",
  "6xl": "text-5xl font-semibold leading-[59px]",
  xs: "text-xs font-semibold leading-[15px]",
  lg: "text-lg font-semibold leading-[22px]",
};

const Heading = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-gray-900_09 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {" "}
      {children}
    </Component>
  );
};
export { Heading };
