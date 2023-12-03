import React from "react";
import EllipsisIcon from "../icons/ellipsis.svg";

const Ellipsis = () => {
  return (
    <div className="w-9 h-3 rounded-xl p-3 bg-gray-300 flex items-center justify-center shadow-2xl">
      <span>
        <img src={EllipsisIcon} alt="ellipsis"></img>
      </span>
    </div>
  );
};

export default Ellipsis;
