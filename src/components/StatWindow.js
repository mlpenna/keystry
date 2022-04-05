import { Box, Typography } from "@mui/material";

function StatWindow() {
  return (
    <Box
      sx={{
        width: 0.1,
        border: 1,
      }}
    >
      <Typography variant="subtitle2" component="h1" align="center">
        Keyboard Speed
      </Typography>
    </Box>
  );
}

export default StatWindow;
