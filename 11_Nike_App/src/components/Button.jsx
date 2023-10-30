import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  width,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-3 border font-montserrat text-lg leading-none 
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full max-sm:w-full max-sm:py-4`}
    >
      {label}
      
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="rounded-full w-6 h-6"
        />
      )}
    </button>
  );
};

export default Button;
