import { Box } from "@mui/material";

function Char({ c, correct }) {
  return correct ? (
    <Box component="div" sx={{ background: "#9aeda5", display: "inline" }}>
      {c}
    </Box>
  ) : (
    <Box component="div" sx={{ background: "#f79281", display: "inline" }}>
      {c}
    </Box>
  );
}

export default Char;
