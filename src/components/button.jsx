import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary", // primary | secondary
}) => {
  const baseStyles =
    "relative px-5 py-2 rounded-lg font-medium transition cursor-pointer transform active:translate-y-1 active:-translate-x-1";

  const variants = {
    primary: "bg-purple-700 text-white border border-purple-900",
    secondary: "bg-purple-200 text-purple-900 border border-purple-900",
  };

  return (
    <div className="relative inline-block">
      {/* Bottom Layer */}
      <div className="absolute inset-0 bg-purple-900 rounded-lg translate-y-1 -translate-x-1"></div>

      {/* Top Layer */}
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
