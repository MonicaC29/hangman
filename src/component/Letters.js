import React from "react";

//Functional component for displaying the alphabet as clickable buttons
const Letters = ({ guessedLetters, onClick, gameOver }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //Rendering the alphabet as button
  return (
    <div className="letters">
      {alphabet.split("").map((letter) => (
        //Each letter is rendered as a button
        <button
          key={letter}
          //Disable the button if the letter has already been guessed
          disabled={guessedLetters.includes(letter) || gameOver}
          //Use onClick function when the button is clicked
          onClick={() => onClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

//Export the letters component
export default Letters;
