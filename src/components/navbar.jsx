import React from "react";
import Button from "./button";

const Navbar = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // put resume in public folder
    link.download = "Bikash_Khanal_Resume.pdf";
    link.click();
  };

  const handleHireMe = () => {
    // later this can open a modal / form
    console.log("Open Hire Me form");
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-200 px-8 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-purple-900">Bikash.dev</h1>

        {/* Nav Links with subtle border */}
        <ul className="flex gap-8 px-6 py-2  border-purple-400  text-purple-900 font-medium">
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

        {/* Action Buttons */}
        {/* Action Buttons */}
        <div className="flex gap-6">
          {/* Hire Me Button */}
          <Button
            children="Hire Me"
            variant="secondary"
            onClick={handleHireMe}
          />

          {/* Top Layer */}
          <Button children="Download Resume" onClick={handleDownloadResume} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
