import { Typography, Box } from "@mui/material";
import Char from "../Char/Char";

function CharTextArea({ gameIsRunning, goalCharArray, correctnessArray }) {
  return gameIsRunning ? (
    <Box
      sx={{
        // border: 1,
        borderRadius: 1,
        mt: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: 1,
        // minHeight: 320,
        background: "#04293A",
      }}
    >
      <Typography
        variant="h6"
        component="body"
        align="justify"
        sx={{
          padding: 2,
          backgroundColor: "transparent",
          fontSize: 29,
          color: "#fafafa",
        }}
      >
        {goalCharArray.map((c, i) =>
          i < correctnessArray.length ? (
            <Char key={i} c={c} correct={correctnessArray[i]} />
          ) : (
            <Char key={i} c={c} correct={null} />
          )
        )}
      </Typography>
    </Box>
  ) : null;
}

export default CharTextArea;
