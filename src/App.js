import { Box, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function App() {

  const [keyPressed, setKeyPressed] = useState("_");

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
            {keyPressed}
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
            onKeyPress={console.log("asas")}
            onChange={(input) => console.log(input)}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
