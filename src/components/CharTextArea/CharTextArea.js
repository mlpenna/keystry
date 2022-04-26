import { Typography, Box } from "@mui/material";
import Char from "../Char/Char";

function CharTextArea({ goalCharArray, typedCharArray, correctnessArray }) {
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
          color: "#fafafa"
        }}
      >
        {goalCharArray.map((c, i) =>
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
