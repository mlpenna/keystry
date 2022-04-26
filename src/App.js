import { Box, Container, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useEffect, useState } from "react";
import { computeCorrectnessArray } from "./lib/utils";
import CharTextArea from "./components/CharTextArea/CharTextArea";
import MainTitle from "./components/MainTitle/MainTitle";
// import VirtualKeyboard from "./components/VirtualKeyboard";
import NavBar from "./components/NavBar/NavBar";
import InformationalText from "./components/InformationalText/InformationalText";
import useTimer from "./hooks/useTimer";
import useKeyboardHandler from "./hooks/useKeyboardHandler";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#064663',
    },
  },
});

function App() {
  const [typedCharArray, setTypedCharArray] = useState([]);
  const [goalCharArray, setGoalCharArray] = useState([]);
  const [correctnessArray, setCorrectnessArray] = useState([]);
  const [gameIsRunning, setGameIsRunning] = useState(false);

  const [resetTimer, seconds] = useTimer();
  useKeyboardHandler(
    setTypedCharArray,
    setGoalCharArray,
    setGameIsRunning,
    resetTimer
  );

  useEffect(() => {
    computeCorrectnessArray(typedCharArray, goalCharArray, setCorrectnessArray);
  }, [typedCharArray, goalCharArray]);

  useEffect(() => {
    if (seconds === 0) {
      setGameIsRunning(false);
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
            {/* <MainTitle /> */}
            <InformationalText gameHasStarted={gameIsRunning} />
            <CharTextArea
              goalCharArray={goalCharArray}
              typedCharArray={typedCharArray}
              correctnessArray={correctnessArray}
            />
            {/* <VirtualKeyboard /> */}
            <Box>{seconds}</Box>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
