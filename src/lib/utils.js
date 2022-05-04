import randomWords from "random-words";

function computeStats(typedCharArray, goalCharArray, correctnessArray) {
  //creat array of "words" from array of chars
  const arrayOfTypedWords = typedCharArray.join("").split(" ");
  const arrayOfGoalWords = goalCharArray.join("").split(" ");
  const correctCharsCount = correctnessArray.filter((x) => x === 1).length;
  let correctTypedWordsCount = 0;
  let wpm = 0;
  let acc = 0;

  arrayOfTypedWords.forEach((e, i) => {
    if (arrayOfGoalWords[i] === e) {
      correctTypedWordsCount++;
    }
  });

  wpm = correctTypedWordsCount * 3; //20s game
  acc = (correctCharsCount / correctnessArray.length).toFixed(2);

  return [wpm, acc];
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
  // export function charArray
  setCorrectnessArray(newCArray);
}

export function startsNewGame(
  setCharHistory,
  setCharText,
  setGameIsRunning,
  setGameHasEnded,
  resetTimer,
  setWpm,
  setAcc
) {
  setCharHistory([]);
  setCharText(Array.from(generateNewWordList()[0]));
  setGameIsRunning(true);
  setGameHasEnded(false);
  setWpm(0);
  setAcc(0);
  resetTimer();
}

export function endGame(
  setGameHasEnded,
  setGameIsRunning,
  typedCharArray,
  goalCharArray,
  correctnessArray
) {
  setGameHasEnded(true);
  setGameIsRunning(false);
  return computeStats(typedCharArray, goalCharArray, correctnessArray);
}
