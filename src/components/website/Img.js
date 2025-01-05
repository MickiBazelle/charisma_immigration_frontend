import React from "react";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  width,
  height,
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
      height={height}
      width={width}
    />
  );
};

export { Img };
