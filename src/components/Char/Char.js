import { Box } from "@mui/material";

function Char({ c, correct }) {
  return correct ? (
    <Box component="div" sx={{ color: "#9aeda5", display: "inline" }}>
      {c}
    </Box>
  ) : (
    <Box component="div" sx={{ color: "#f79281", display: "inline" }}>
      {c}
    </Box>
  );
}

export default Char;
