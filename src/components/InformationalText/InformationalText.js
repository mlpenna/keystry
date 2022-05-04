import { Box, Typography } from "@mui/material";

function InformationalText({ seconds }) {
  // console.log(gameIsRunning);

  return (
    <Box
      sx={{
        width: 1,
        // textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h6" align="center" color="#ECB365">
        {seconds === -1 ? "_" : seconds}
      </Typography>
    </Box>
  );
}

export default InformationalText;
