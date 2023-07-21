import React from "react";
import "../styles/ScoreBoard.css";
const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="score-board">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O - {oScore}
      </span>

      {/* <div className="x-score">{scores.xScore}</div>
      <div className="o-score">{scores.oScore}</div> */}
    </div>
  );
};

export default ScoreBoard;
