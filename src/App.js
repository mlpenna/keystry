import { Box, Container, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useEffect, useState } from "react";
import { computeCorrectnessArray, endGame } from "./lib/utils";
import CharTextArea from "./components/CharTextArea/CharTextArea";
import NavBar from "./components/NavBar/NavBar";
import InformationalText from "./components/InformationalText/InformationalText";
import useTimer from "./hooks/useTimer";
import useKeyboardHandler from "./hooks/useKeyboardHandler";
import EndGameStats from "./components/EndGameStats/EndGameStats";
import Footer from "./components/Footer/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#064663",
    },
  },
});

function App() {
  const [typedCharArray, setTypedCharArray] = useState([]);
  const [goalCharArray, setGoalCharArray] = useState([]);
  const [correctnessArray, setCorrectnessArray] = useState([]);
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [gameHasEnded, setGameHasEnded] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [acc, setAcc] = useState(0);

  const [resetTimer, seconds] = useTimer();

  useKeyboardHandler(
    typedCharArray,
    goalCharArray,
    correctnessArray,
    gameIsRunning,
    setTypedCharArray,
    setGoalCharArray,
    setGameIsRunning,
    setGameHasEnded,
    resetTimer,
    setWpm,
    setAcc
  );

  useEffect(() => {
    computeCorrectnessArray(typedCharArray, goalCharArray, setCorrectnessArray);
  }, [typedCharArray, goalCharArray]);

  useEffect(() => {
    if (seconds === 0) {
      let [wpm, acc] = endGame(
        setGameHasEnded,
        setGameIsRunning,
        typedCharArray,
        goalCharArray,
        correctnessArray
      );
      setWpm(wpm);
      setAcc(acc);
      // console.log(wpm, acc);
    }
  }, [seconds]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              mt: 3,
              width: "600px",
            }}
          >
            <NavBar
              setTypedCharArray={setTypedCharArray}
              setGoalCharArray={setGoalCharArray}
            />
            {!gameHasEnded && gameIsRunning ? (
              <>
                <InformationalText
                  seconds={seconds}
                  gameIsRunning={gameIsRunning}
                />
                <CharTextArea
                  gameIsRunning={gameIsRunning}
                  goalCharArray={goalCharArray}
                  typedCharArray={typedCharArray}
                  correctnessArray={correctnessArray}
                />
              </>
            ) : (
              <>
                <EndGameStats wpm={wpm} acc={acc} />
              </>
            )}
          </Stack>
        </Box>
      </Container>
      <Footer />

      {/* 
      <Box>{typedCharArray + " " + typedCharArray.length}</Box>
      <Box>{correctnessArray + " " + correctnessArray.length}</Box>
      <Box>{"running: " + gameIsRunning.toString()}</Box>
      <Box>{"hasEnded: " + gameHasEnded.toString()}</Box>
      <Box>{seconds}</Box> 
      <Box>{wpm}</Box>
      <Box>{acc}</Box>
      */}
    </ThemeProvider>
  );
}

export default App;
