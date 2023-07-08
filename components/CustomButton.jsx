"use client";

const CustomButton = ({ title, containerStyles, handleClick }) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
