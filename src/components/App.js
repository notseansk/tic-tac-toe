import React, { useState } from "react";
import "../styles/App.css";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import ResetButton from "./ResetButton";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [gameOver, setGameOver] = useState(false);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [boxValues, setBoxValues] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const handleClick = (index) => {
    const updatedBoxValues = boxValues.map((eachBoxValue, tempIndex) => {
      if (tempIndex === index) {
        return xPlaying ? "X" : "O";
      } else {
        return eachBoxValue;
      }
    });
    const winner = checkWinner(updatedBoxValues);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
      // localStorage.setItem("score", JSON.stringify(scores));
    }

    // console.log(scores);
    setBoxValues(updatedBoxValues);
    setXPlaying(!xPlaying);
  };
  const checkWinner = (boxValues) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (
        boxValues[x] &&
        boxValues[x] === boxValues[y] &&
        boxValues[y] === boxValues[z]
      ) {
        setGameOver(true);
        return boxValues[x];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoxValues(Array(9).fill(null));
    setXPlaying(true);
  };
  return (
    <div className="App">
      <ScoreBoard xPlaying={xPlaying} scores={scores} />
      <Board
        boxValues={boxValues}
        handleClick={gameOver ? resetBoard : handleClick}
      />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
