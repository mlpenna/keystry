import { Box } from "@mui/material";

function Char({ c, correct }) {
  if (correct === null) {
    return (
      <Box component="div" sx={{ color: "#aaaaaa", display: "inline" }}>
        {c}
      </Box>
    );
  }
  return correct ? (
    <Box component="div" sx={{ color: "#ffffff", display: "inline" }}>
      {c}
    </Box>
  ) : (
    <Box component="div" sx={{ color: "#f79281", display: "inline" }}>
      {c}
    </Box>
  );
}

export default Char;
