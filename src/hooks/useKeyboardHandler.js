import { useEffect, useState } from "react";
import { startsNewGame } from "../lib/utils";

const useKeyboardHandler = (
  setCharHistory,
  setCharText,
  setKeystrokeCounter,
  setGameIsRunning,
  resetTimer
) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // 13 = enter key -> starts new game
      startsNewGame(
        setCharHistory,
        setCharText,
        setKeystrokeCounter,
        setGameIsRunning,
        resetTimer
      );
    }
    if (event.keyCode === 9) {
      // 9 = disable tab key
      event.preventDefault();
    }
    if (event.keyCode === 8) {
      // 8 = handle backspace
      setCharHistory((charHistory) => charHistory.slice(0, -1));
    }
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 32) {
      //handle letters and space
      setCharHistory((charHistory) => [
        ...charHistory,
        String.fromCharCode(event.keyCode).toLowerCase(),
      ]);
      //imcrement keystroke
      setKeystrokeCounter((keystrokeCounter) => keystrokeCounter + 1);
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

