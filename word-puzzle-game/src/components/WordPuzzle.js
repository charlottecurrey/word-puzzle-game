import React, { useState } from "react";

const WordPuzzle = () => {
  const [word, setWord] = useState("");
  const [shuffledWord, setShuffledWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const handleStartGame = () => {
    const wordToShuffle = prompt("Enter a word:");
    if (wordToShuffle) {
      setWord(wordToShuffle);
      setShuffledWord(shuffleWord(wordToShuffle));
      setUserInput("");
      setMessage("");
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.toLowerCase() === word.toLowerCase()) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect. Try again.");
    }
  };

  const shuffleWord = (str) => {
    return str
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  return (
    <div>
      <h1>Word Puzzle Game</h1>
      <button onClick={handleStartGame}>Start Game</button>
      <div>Shuffled Word: {shuffledWord}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter your guess"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default WordPuzzle;
