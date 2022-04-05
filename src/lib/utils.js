import randomWords from "random-words";

export function generateNewWordList() {
  return randomWords({
    exactly: 1,
    wordsPerString: 30,
  });
}

export function resetCharHistory(setCharHistory) {
  setCharHistory([]);
}

export function startsNewGame(setCharHistory, setCharText) {
  resetCharHistory(setCharHistory);
  setCharText(generateNewWordList);
}
