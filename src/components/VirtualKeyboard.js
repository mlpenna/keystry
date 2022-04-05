import { Box } from "@mui/material";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

function VirtualKeyboard() {
  return (
    <Box
      sx={{
        width: 1,
        border: 1,
      }}
    >
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
    </Box>
  );
}

export default VirtualKeyboard;
