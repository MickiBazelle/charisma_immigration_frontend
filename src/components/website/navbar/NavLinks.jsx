import React, { useState } from "react";
import NavigationLink from "./NavigationLink";

function NavLinks() {
  const [activeItem, setActiveItem] = useState(null);
  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <NavigationLink
        name="services"
        to="/"
        isActive={activeItem === "services"}
        onClick={() => handleNavItemClick("services")}
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
