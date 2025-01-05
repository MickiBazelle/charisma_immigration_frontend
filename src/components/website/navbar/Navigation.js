import NavItem from "./NavItem";

// Main Navigation Component
const Navigation = () => {
  const navItems = ["Home", "Aboutus", "Pricing", "Blog", "Contactus"];

  return (
    <nav className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
      {navItems.map((item) => (
        <NavItem key={item}>{item}</NavItem>
      ))}
    </nav>
  );
};

export default Navigation;
