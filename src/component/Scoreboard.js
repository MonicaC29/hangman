import React from "react";

const Scoreboard = ({ incorrectGuesses }) => {
  return (
    <div className="scoreboard"> Incorrect Guesses:{incorrectGuesses}</div>
  );
};

export default Scoreboard;
