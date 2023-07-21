import React from "react";
import "../styles/ResetButton.css";
const ResetButton = ({ resetBoard }) => {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      Reset
    </button>
  );
};

export default ResetButton;
