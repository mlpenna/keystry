import { Typography, Box } from "@mui/material";
import Char from "./Char";

function CharTextArea({ charText, charHistory, correctnessArray }) {
  return (
    <Box
      sx={{
        // border: 1,
        borderRadius: 1,
        mt: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: 1,
        minHeight: 200,
        background: "#dce6df",
      }}
    >
      <Typography
        variant="h6"
        component="body"
        sx={{
          padding: 2,
        }}
      >
        {charText.map((c, i) =>
          i < correctnessArray.length ? (
            <Char key={i} c={c} correct={correctnessArray[i]} />
          ) : (
            <Box key={i} component="div" sx={{ display: "inline" }}>
              {c}
            </Box>
          )
        )}
      </Typography>
    </Box>
  );
}

export default CharTextArea;
