import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      // Chiudi il menu dopo aver cliccato su un link
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-orange-600 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-gray-900 text-4xl font-bold">Brian Belaj</h2>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            className="text-gray-900 hover:text-lime-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links - Desktop */}
        <div className="hidden lg:flex space-x-4">
          <button
            className="text-gray-900 hover:text-lime-200 lg:text-lg"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="text-gray-900 hover:text-lime-200 lg:text-lg"
            onClick={() => scrollToSection("experience")}
          >
            My Experience
          </button>
          <button
            className="text-gray-900 hover:text-lime-200 lg:text-lg"
            onClick={() => scrollToSection("form-contact")}
          >
            Contact me
          </button>
        </div>

        {/* Dropdown Links - Mobile */}
        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <button
            className="block text-gray-900 hover:text-lime-200 lg:text-lg"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className="block text-gray-900 hover:text-lime-200 lg:text-lg"
            onClick={() => scrollToSection("experience")}
          >
            My Experience
          </button>
          <button
            className="block text-gray-900 hover:text-lime-200 lg:text-lg"
            onClick={() => scrollToSection("form-contact")}
          >
            Contact me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
