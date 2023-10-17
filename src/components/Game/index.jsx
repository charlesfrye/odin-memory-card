import { useState } from "react";
import Cardboard from "../Cardboard";
import Scoreboard from "../Scoreboard";

function Game() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  if (score > maxScore) {
    setMaxScore(score);
  }
  return (
    <>
      <Cardboard setScore={setScore}></Cardboard>
      <Scoreboard value={score} maxValue={maxScore}></Scoreboard>
    </>
  );
}

export default Game;
