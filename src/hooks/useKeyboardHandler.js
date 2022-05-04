import { useEffect } from "react";
import { startsNewGame, endGame } from "../lib/utils";

const useKeyboardHandler = (
  typedCharArray,
  goalCharArray,
  correctnessArray,
  gameIsRunning,
  setCharHistory,
  setCharText,
  setGameIsRunning,
  setGameHasEnded,
  resetTimer,
  setWpm,
  setAcc
) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // 13 = enter key -> starts new game
      startsNewGame(
        setCharHistory,
        setCharText,
        setGameIsRunning,
        setGameHasEnded,
        resetTimer,
        setWpm,
        setAcc
      );
    }

    if (event.keyCode === 16) {
      // 13 = enter key -> starts new game
      endGame(
        setGameHasEnded,
        setGameIsRunning,
        typedCharArray,
        goalCharArray,
        correctnessArray
      );
    }
    if (event.keyCode === 9) {
      // 9 = disable tab key
      event.preventDefault();
    }
    if (gameIsRunning) {
      if (event.keyCode === 8) {
        // 8 = handle backspace
        setCharHistory((charHistory) => charHistory.slice(0, -1));
      }
      if (
        (event.keyCode >= 65 && event.keyCode <= 90) ||
        event.keyCode === 32
      ) {
        //handle letters and space
        setCharHistory((charHistory) => [
          ...charHistory,
          String.fromCharCode(event.keyCode).toLowerCase(),
        ]);
        //imcrement keystroke
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return [];
};

export default useKeyboardHandler;
