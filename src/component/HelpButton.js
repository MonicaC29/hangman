import React, { useState } from "react";
const HelpButton = () => {
  const [showHelp, setShowHelp] = useState(false);

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div>
      <button onClick={toggleHelp}>Help</button>
      {showHelp && (
        <div>
          {/*Display help information*/}
          <p>
            Rules of the game: 1.The game will start with a random selected
            word. Click on the letters to guess the word. 2.You have a maximum
            of 10 incorrect guesses before the game is over. 3.Try to guess the
            word before running out of guesses to win the game.
          </p>
        </div>
      )}
    </div>
  );
};
//Export the Button Help component
export default HelpButton;
