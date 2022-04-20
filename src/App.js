import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { computeCorrectnessArray } from "./lib/utils";
import CharTextArea from "./components/CharTextArea";
import MainTitle from "./components/MainTitle";
import VirtualKeyboard from "./components/VirtualKeyboard";
import NavBar from "./components/NavBar";
import InformationalText from "./components/InformationalText";
import useTimer from "./hooks/useTimer";
import useKeyboardHandler from "./hooks/useKeyboardHandler";

function App() {
  const [charHistory, setCharHistory] = useState([]);
  const [charText, setCharText] = useState([]);
  const [correctnessArray, setCorrectnessArray] = useState([]);
  const [keystrokeCounter, setKeystrokeCounter] = useState(0);
  const [gameIsRunning, setGameIsRunning] = useState(false);

  const [resetTimer, seconds] = useTimer();
  useKeyboardHandler(
    setCharHistory,
    setCharText,
    setKeystrokeCounter,
    setGameIsRunning,
    resetTimer
  );

  useEffect(() => {
    computeCorrectnessArray(charHistory, charText, setCorrectnessArray);
  }, [charHistory]);

  useEffect(() => {
    if (seconds === 0) {
      setGameIsRunning(false);
    }
  }, [seconds]);

  return (
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
            setCharHistory={setCharHistory}
            setCharText={setCharText}
            setKeystrokeCounter={setKeystrokeCounter}
          />
          <MainTitle />
          <InformationalText gameHasStarted={gameIsRunning} />
          <CharTextArea
            charText={charText}
            charHistory={charHistory}
            correctnessArray={correctnessArray}
          />
          <VirtualKeyboard />
          {/* <Box>{keystrokeCounter}</Box> */}
          {/* <Box>{charHistory}</Box> */}
          {/* <Box>{charText}</Box> */}
          {/* <Box>{correctnessArray}</Box> */}
          <Box>{seconds}</Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
