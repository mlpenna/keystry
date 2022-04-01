import { Box, Container, Stack, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { useKeyDown } from "react-keyboard-input-hook";

function App() {

  // const [charHistory, setCharHistory] = useState([]);
  


  const handleKeyDown = (event) => {
    const chPressed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Pressed", chPressed);
    console.log("Hist", charHistory);
    let r = [...charHistory, chPressed ];
    console.log(r)
    setCharHistory([1,2,3])
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing="10"
          sx={{
            mt: 10,
          }}
        >
          <Typography variant="h1" component="h1">
            Keyboard Speed
          </Typography>
          <Typography variant="body" component="h1">
            {charHistory}
          </Typography>
          <Keyboard
            physicalKeyboardHighlight={true}
            physicalKeyboardHighlightTextColor={"black"}
            layout={{
              default: [
                // "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "q w e r t y u i o p",
                "a s d f g h j k l",
                "z x c v b n m , .",
                "{space}",
              ],
            }}
            display={{
              "{_}": " ",
              "{bksp}": "delete",
              "{enter}": "enter",
              "{shift}": "shift",
              "{space}": " ",
            }}
            // onChange={(input) => onChange(input)}
            // onKeyPress={(button) => onKeyPress(button)}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
