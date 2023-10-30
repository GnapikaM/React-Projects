import React from "react";

const Notification = ({ message }) => {
  return (
    <div className="flex items-center justify-center">
      <h3 className="text-center bg-[#222] text-white w-[200px] p-3 text-lg font-bold rounded-md fixed z-10">
        {message}
      </h3>
    </div>
  );
};

export default Notification;
