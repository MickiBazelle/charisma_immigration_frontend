import React, { useState } from "react";
import NavigationLink from "./NavigationLink";
import { useNavigate, useLocation } from "react-router-dom";

function NavLinks({ onServicesClick }) {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    handleNavItemClick("services");

    if (location.pathname !== "/") {
      // Pass state to indicate we want to scroll to services after navigation
      navigate("/", { state: { scrollToServices: true } });
    } else {
      onServicesClick?.();
    }
  };

  return (
    <>
      <NavigationLink
        name="services"
        to="#services-section"
        isActive={activeItem === "services"}
        onClick={handleServicesClick}
      >
        Services
      </NavigationLink>
      <NavigationLink
        name="about"
        isActive={activeItem === "about"}
        to="/about-us/"
        onClick={() => handleNavItemClick("about")}
      >
        About us
      </NavigationLink>
      <NavigationLink
        name="testimonials"
        to="/testimonials/"
        isActive={activeItem === "testimonials"}
        onClick={() => handleNavItemClick("testimonials")}
      >
        Testimonials
      </NavigationLink>
      <NavigationLink
        name="courses"
        isActive={activeItem === "courses"}
        onClick={() => handleNavItemClick("courses")}
        to="/courses/"
      >
        Courses
      </NavigationLink>
      <NavigationLink
        name="contact"
        isActive={activeItem === "contact"}
        to="/contact-us/"
        onClick={() => handleNavItemClick("contact")}
      >
        Contact us
      </NavigationLink>
    </>
  );
}

export default NavLinks;
