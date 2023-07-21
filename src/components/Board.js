import React from "react";
import "../styles/Board.css";
import Box from "./Box";

const Board = ({ boxValues, handleClick }) => {
  return (
    <div className="board">
      {boxValues.map((eachBoxValue, index) => (
        <Box
          value={eachBoxValue}
          key={index}
          handleClick={() => {
            eachBoxValue === null && handleClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default Board;
