//importing modules and components
import React, { useState, useEffect } from "react";
import "./App.css";
import Letters from "./component/Letters";
import Word from "./component/Word";
import HangmanImage from "./component/HangmanImage";
import HelpButton from "./component/HelpButton";
import Scoreboard from "./component/Scoreboard";

//Array of words for the game
const words = ["REACT", "JAVASCRIPT", "DEVELOPER", "COMPONENT"];

//Main App component
const App = () => {
  //State Variables to manage the game state
  const [selectedWord, setSelectedWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  //UseEffect hook to initialize the game by selecting a random word
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toUpperCase());
  }, []);

  //Event handler for letter clicks
  const handleLetterClick = (letter) => {
    if (!gameOver && !guessedLetters.includes(letter)) {
      if (selectedWord.includes(letter)) {
        setGuessedLetters([...guessedLetters, letter]);
      } else {
        setIncorrectGuesses(incorrectGuesses + 1);
        if (incorrectGuesses + 1 >= 10) {
          setGameOver(true);
        }
      }
    }
  };

  //Function to check if the game is over
  const isGameOver = () => {
    const maxIncorrectGuesses = 10;
    return (
      incorrectGuesses >= maxIncorrectGuesses ||
      new Set(guessedLetters).size === new Set(selectedWord).size
    );
  };

  //Function to create the mask word for display
  const WordMask = () => {
    return selectedWord
      .split("")
      .map((char) => (guessedLetters.includes(char) ? char : "_"))
      .join("");
  };

  //Function to reset the game state
  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex].toUpperCase());
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameOver(false);
  };

  //Function to reset game state
  const isYouWin = () => {
    return WordMask() === selectedWord;
  };

  //Rendering the game component
  return (
    <div className="App">
      <h1>O---HANGMAN GAME---O</h1>
      <HangmanImage incorrectGuesses={incorrectGuesses} gameOver={gameOver} />
      <Word word={WordMask()} />
      <Letters guessedLetters={guessedLetters} onClick={handleLetterClick} />
      <HelpButton />
      <Scoreboard incorrectGuesses={incorrectGuesses} />
      {isGameOver() && (
        <div>
          <h2>{isYouWin() ? "You Win!" : "Game Over!"}</h2>
          <button onClick={resetGame}> Play Again</button>
        </div>
      )}
    </div>
  );
};

//Exporting the App component
export default App;
