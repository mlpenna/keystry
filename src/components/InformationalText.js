import { Box, Typography } from "@mui/material";

function InformationalText() {
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Typography variant="subtitle2" component="p" align="center">
        Pressione Enter para começar um novo teste...
      </Typography>
    </Box>
  );
}

export default InformationalText;
