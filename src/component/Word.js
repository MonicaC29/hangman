import React from "react";

//Functional component for displaying the word as individual characters
const Word = ({ word }) => {
  return (
    //Container div with a word class for styling
    <div className="word">
      {/*Mapping through each character of the word*/}
      {word.split("").map((char, index) => (
        //Each character is wrapped in a span element with a unique key
        <span key={index}> {char}</span>
      ))}
    </div>
  );
};

//Exporting the word component
export default Word;
