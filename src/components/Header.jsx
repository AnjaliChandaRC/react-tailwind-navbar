import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden-while-loading");
    } else if (!isMobileMenuOpen) {
      document.body.classList.remove("overflow-hidden-while-loading");
    }
  }, [isMobileMenuOpen]);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="bg-gray-400">
      <div className="container xl:max-w-[1100px] py-[26px] lg:py-[36px] px-4 sm:px-8 xl:px-0 mx-auto flex items-center justify-between">
        <a href="/">
          <h2 className="font-black text-2xl">Food Ninja</h2>
        </a>
        <div className="hidden md:flex items-center">
          <a
            href="#blog-post"
            className="text-lg transition-all duration-300 ease-in-out hover:opacity-30"
            onClick={closeMobileMenu}
          >
            Blog
          </a>
          <a
            href="#about"
            className="text-lg text-gray transition-all duration-300 ease-in-out hover:opacity-30 px-5"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-lg text-gray transition-all duration-300 ease-in-out hover:opacity-30"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-lg text-white rounded-[29px] bg-blue-500 pt-[3px] pb-[6px] px-4 ml-5 transition-all duration-300 ease-in-out hover:opacity-30"
          >
            Log in
          </a>
        </div>
        <div className="md:hidden custom_index">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-400 z-50 flex justify-center items-center transition-all duration-300">
          <div className="text-black py-4 flex justify-center items-center navbar_custom_height">
            <ul className="flex flex-col items-center animate-fadeIn">
              <li>
                <a
                  href="#blog-post"
                  className="text-lg text-gray transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  Blog
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#about"
                  className="text-lg text-gray transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#contact"
                  className="text-lg text-gray transition-all duration-300 ease-in-out hover:opacity-30"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </li>
              <a
                href="#contact"
                className="text-lg text-white rounded-[29px] bg-blue-500 pt-[3px] pb-[6px] px-4 mt-3 transition-all duration-300 ease-in-out"
                onClick={closeMobileMenu}
              >
                Log in
              </a>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
