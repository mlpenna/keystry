import randomWords from "random-words";

// export function charArray

export function computeStats(typedCharArray, goalCharArray, correctnessArray) {
  return null;
}

export function generateNewWordList() {
  return randomWords({
    exactly: 1,
    wordsPerString: 30,
  });
}

export function computeCorrectnessArray(
  typedCharArray,
  goalCharArray,
  setCorrectnessArray
) {
  let newCArray = [];
  for (let i = 0; i < typedCharArray.length; i++) {
    if (typedCharArray[i] === goalCharArray[i]) {
      newCArray.push(1);
    } else {
      newCArray.push(0);
    }
  }
  setCorrectnessArray(newCArray);
}

export function startsNewGame(
  setCharHistory,
  setCharText,
  setGameIsRunning,
  setGameHasEnded,
  resetTimer
) {
  setCharHistory([]);
  setCharText(Array.from(generateNewWordList()[0]));
  setGameIsRunning(true);
  setGameHasEnded(false);
  resetTimer();
}

export function endGame(setGameHasEnded, setGameIsRunning) {
  setGameHasEnded(true);
  setGameIsRunning(false);
} 
