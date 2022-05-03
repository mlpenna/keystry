import { Box } from "@mui/material";

const letterColor = {
  neutral: "#aaaaaa",
  correct: "#ffffff",
  wrong: "#f79281",
}

function Char({ c, correct }) {
  
  // if (c === " ") {
  //   c = "_";
  // }

  if (correct === null) {
    return (
      <Box component="div" sx={{ color: letterColor.neutral, display: "inline" }}>
        {c}
      </Box>
    );
  }
  return correct ? (
    <Box component="div" sx={{ color: letterColor.correct, display: "inline" }}>
      {c}
    </Box>
  ) : (
    <Box component="div" sx={{ color: letterColor.wrong, display: "inline" }}>
      {c}
    </Box>
  );
}

export default Char;
