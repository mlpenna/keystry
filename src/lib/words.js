import randomWords from "random-words";

export function generateWordList() {
  return randomWords({
    exactly: 1,
    wordsPerString: 30,
  });
}
