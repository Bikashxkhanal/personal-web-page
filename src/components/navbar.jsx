import React, { useState } from "react";
import Button from "./button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // place resume in public folder
    link.download = "Bikash_Khanal_Resume.pdf";
    link.click();
  };

  const handleHireMe = () => {
    // later this can open a modal / form
    console.log("Open Hire Me form");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-200 px-8 py-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-purple-900">Bikash.dev</h1>

        {/* Hamburger button (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-900 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links (desktop) */}
        <ul className="hidden md:flex gap-8 px-6 py-2 border-purple-400 text-purple-900 font-medium">
          <li className="cursor-pointer hover:text-purple-700 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-purple-700 transition">
            Projects
          </li>
          <li className="cursor-pointer hover:text-purple-700 transition">
            Experience
          </li>
          <li className="cursor-pointer hover:text-purple-700 transition">
            Education
          </li>
        </ul>

        {/* Action Buttons (desktop) */}
        <div className="hidden md:flex gap-6">
          <Button
            children="Hire Me"
            variant="secondary"
            onClick={handleHireMe}
          />
          <Button children="Download Resume" onClick={handleDownloadResume} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 pb-4 border-t border-purple-300 bg-purple-100 rounded-b-lg">
          <ul className="flex flex-col gap-4 text-purple-900 font-medium">
            <li className="cursor-pointer hover:text-purple-700 transition">
              About
            </li>
            <li className="cursor-pointer hover:text-purple-700 transition">
              Projects
            </li>
            <li className="cursor-pointer hover:text-purple-700 transition">
              Experience
            </li>
            <li className="cursor-pointer hover:text-purple-700 transition">
              Education
            </li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <Button
              children="Hire Me"
              variant="secondary"
              onClick={handleHireMe}
            />
            <Button children="Download Resume" onClick={handleDownloadResume} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
