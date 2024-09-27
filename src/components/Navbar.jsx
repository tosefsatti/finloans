import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const togglePagesDropdown = () => setIsPagesOpen(!isPagesOpen);
  const toggleBlogDropdown = () => setIsBlogOpen(!isBlogOpen);

  return (
    <>
      <div className="navbar bg-[#4C4C4C] md:bg-[#001D38CC] text-white fixed top-0 right-0 left-0">
        <div className="navbar-start justify-between lg:justify-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-black ml-auto btn-ghost lg:hidden"
            >
              Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#4C4C4C] mx-0 rounded-box z-[1] mt-2 w-full p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/loan">loan</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a
                  onClick={togglePagesDropdown}
                  className="flex justify-between items-center"
                >
                  Pages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${
                      isPagesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </a>
                {isPagesOpen && (
                  <ul className="p-2 text-black bg-white w-full rounded-md">
                    <li>
                      <Link to="/loan">Apply loans</Link>
                    </li>
                    <li>
                      <Link to="/">Elements</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  onClick={toggleBlogDropdown}
                  className="flex justify-between items-center"
                >
                  Blog
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform ${
                      isBlogOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </a>
                {isBlogOpen && (
                  <ul className="p-2 bg-white text-black w-full rounded-md">
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Single-Blog</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="hidden md:btn md:btn-ghost text-xl">
            <img
              src="https://preview.colorlib.com/theme/finloans/img/logo.png.webp"
              alt="logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden py-3 lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
            <Link
                to="/"
                className={`${
                  activeLink === "Home" ? "bg-black text-white" : ""
                }`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </Link>
            </li>
            <li>
            <Link
                to="/loan"
                className={`${
                  activeLink === "Loan" ? "bg-black text-white" : ""
                }`}
                onClick={() => handleLinkClick("Loan")}
              >
                Loan
              </Link>
            </li>
            <li>
            <Link
                to="/about"
                className={`${
                  activeLink === "About" ? "bg-black text-white" : ""
                }`}
                onClick={() => handleLinkClick("About")}
              >
                About
              </Link>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 text-black w-max">
                  <li>
                    <Link to="/loan">Apply loan</Link>
                  </li>
                  <li>
                    <Link to="/">Element</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Blog</summary>
                <ul className="p-2 text-black w-max">
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Single-Blog</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
            <Link
                to="/contact"
                className={`${
                  activeLink === "Contact" ? "bg-black text-white" : ""
                }`}
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:navbar-end">
          <p className="mx-2 cursor-pointer">+93 74632 432</p>
          <Link
            to="/loan"
            className="btn mr-5 text-[#33D4D6] bg-[#4C4C4C] border-[#33D4D6] hover:bg-[#33D4D6] hover:text-white"
          >
            Apply for A Loan
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
