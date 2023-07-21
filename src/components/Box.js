import React from "react";
import "../styles/Box.css";
const Box = ({ value, handleClick }) => {
  const color = value === "X" ? "box x" : "box o";
  return (
    <button className={color} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Box;
