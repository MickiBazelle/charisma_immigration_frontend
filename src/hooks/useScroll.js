import { useEffect } from "react";

export const useScroll = () => {
  const scrollToElement = (elementRef) => {
    if (elementRef && elementRef.current) {
      const yOffset = -20; // Adjusted from -80 to -20 to show more of the section
      const element = elementRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return { scrollToElement };
};
