import { Box, Typography } from "@mui/material";

function InformationalText({ gameHasStarted, timerSeconds }) {
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Typography variant="subtitle2" component="p" align="center">
        Pressione Enter para começar um novo teste...
      </Typography>
      <Typography variant="subtitle2" component="p" align="center">
        {gameHasStarted.toString()}
      </Typography>
    </Box>
  );
}

export default InformationalText;
