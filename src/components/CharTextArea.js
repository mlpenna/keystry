import { Typography, Box } from "@mui/material";

function CharTextArea({ charText, correctnessArray }) {
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
          correctnessArray[i] ? (
            <Box
              component="div"
              sx={{ background: "#aa11aa", display: "inline" }}
            >
              {c}
            </Box>
          ) : (
            <Box
              component="div"
              sx={{ background: "#ffffff", display: "inline" }}
            >
              {c}
            </Box>
          )
        )}
      </Typography>
    </Box>
  );
}

export default CharTextArea;
