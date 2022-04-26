import randomWords from "random-words";

export function generateNewWordList() {
  return randomWords({
    exactly: 1,
    wordsPerString: 30,
  });
}

export function computeCorrectnessArray(
  charHistory,
  charText,
  setCorrectnessArray
) {
  let newCArray = [];
  for (let i = 0; i < charHistory.length; i++) {
    if (charHistory[i] === charText[i]) {
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
  setKeystrokeCounter,
  setGameIsRunning,
  resetTimer
) {
  setCharHistory([]);
  setCharText(Array.from(generateNewWordList()[0]));
  setKeystrokeCounter(0);
  setGameIsRunning(true);
  resetTimer();
}
