import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { resetCharHistory } from "./lib/utils";

function App() {
  const [charHistory, setCharHistory] = useState([]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
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
      <AppBar elevation={0} color="transparent" position="static">
        <Toolbar>
          <Button
            onClick={() => resetCharHistory(setCharHistory)}
            size="small"
            variant="outlined"
            color="inherit"
            // disabled
          >
            Reset
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing="10"
          sx={{
            mt: 5,
          }}
        >
          <Typography variant="h1" component="h1" align="justify">
            Keyboard Speed
          </Typography>
          {/* <TextAreaKb /> */}
          <Typography variant="body" component="h1">
            {charHistory}
          </Typography>
          <Keyboard
            physicalKeyboardHighlight={true}
            physicalKeyboardHighlightTextColor={"black"}
            layout={{
              default: [
                "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} q w e r t y u i o p [ ] \\",
                "{lock} a s d f g h j k l ; ' {enter}",
                "{shift} z x c v b n m , . / {shift}",
                "{space}",
              ],
            }}
            display={{
              "{_}": " ",
              "{tab}": "Tab",
              "{bksp}": "Backspace",
              "{enter}": "Enter",
              "{shift}": "Shift",
              "{space}": " ",
              "{lock}": "Fixa",
            }}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
