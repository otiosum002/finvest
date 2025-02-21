import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import { Link } from "react-router-dom"; // Import Link for client-side routing

// Updated navItems array with new items
const navItems = ["Home","Book Now", "Sponsors","About","Contact Us"];

const NavBar = () => {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Manage navbar visibility based on scroll position
  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? -20 : -60,  // Reduced y-value to make it less drastic
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 bg-gray-900"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between px-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7 flex-shrink-0">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              fin<span className="text-[#00ff9d]">v</span>est
            </h2>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center space-x-6 flex-grow justify-end">
            {/* Hamburger Icon (Mobile Only) */}
            <button
              className="md:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes size={24} color="white" />
              ) : (
                <FaBars size={24} color="white" />
              )}
            </button>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex h-full items-center space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`} // Home links to "/"
                  className="nav-hover-btn"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-16">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`} // Home links to "/"
              className="block py-2 text-white text-sm"
              onClick={toggleMobileMenu} // Close menu on item click
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
