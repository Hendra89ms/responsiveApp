import React from "react";

function Button({ className, title }) {
  return (
    <button
      className={`${className} bg-[#158D71] text-white border-none outline-none rounded-md`}
    >
      {title}
    </button>
  );
}

export default Button;
