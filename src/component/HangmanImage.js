import React from "react";

//Functional component for displaying Hangman image based on incorrect guesses
const HangmanImage = ({ incorrectGuesses }) => {
  //Array of image for different Hangman states
  const images = [
    "/Images/state1.GIF",
    "/Images/state2.GIF",
    "/Images/state3.GIF",
    "/Images/state4.GIF",
    "/Images/state5.GIF",
    "/Images/state6.GIF",
    "/Images/state7.GIF",
    "/Images/state8.GIF",
    "/Images/state9.GIF",
    "/Images/state10.GIF",
    "/Images/state11.GIF",
  ];

  //Rendering the Hangman image based on the number of incorrect guesses
  return (
    <img src={images[incorrectGuesses]} alt={`Hangman ${incorrectGuesses}`} />
  );
};

//Exporting the Hangman component
export default HangmanImage;
