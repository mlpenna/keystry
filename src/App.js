import { Box, Container, Stack } from "@mui/material";
import { React, useEffect, useState } from "react";
import { computeCorrectnessArray, startsNewGame } from "./lib/utils";
import CharTextArea from "./components/CharTextArea";
import MainTitle from "./components/MainTitle";
import VirtualKeyboard from "./components/VirtualKeyboard";
import NavBar from "./components/NavBar";

function App() {
  const [charHistory, setCharHistory] = useState([]);
  const [charText, setCharText] = useState([]);
  const [correctnessArray, setCorrectnessArray] = useState([]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    computeCorrectnessArray(charHistory, charText, setCorrectnessArray);
  }, [charHistory]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      //enter key -> starts new game
      startsNewGame(setCharHistory, setCharText);
    }
    if (event.keyCode === 9) {
      //disable tab key
      event.preventDefault();
    }
    if (event.keyCode === 8) {
      //handle backspace
      setCharHistory((charHistory) => charHistory.slice(0, -1));
    }
    if ((event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 32) {
      //handle letters and space
      setCharHistory((charHistory) => [
        ...charHistory,
        String.fromCharCode(event.keyCode).toLowerCase(),
      ]);
    }
  };

  return (
    <Container>
      <NavBar setCharHistory={setCharHistory} setCharText={setCharText} />
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
          <MainTitle />
          <CharTextArea
            charText={charText}
            correctnessArray={correctnessArray}
          />
          <VirtualKeyboard />
          <Box>{charHistory}</Box>
          <Box>{charText}</Box>
          <Box>{correctnessArray}</Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
