"use client";

import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick, rightIcon }) => {
  return (
    <button
      className={`custom-btn ${containerStyles} ${rightIcon && "relative"}`}
      type="button"
      onClick={handleClick}
    >
      {title}
      {rightIcon && (
        <div className="absolute right-5">
          <Image src={rightIcon} alt="right icon" width={20} height={20} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
