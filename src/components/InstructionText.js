import { Box, Typography } from "@mui/material";

function InstructionText() {
  return (
    <Box
      sx={{
        width: 1,
      }}
    >
      <Typography variant="subtitle2" component="p" align="center">
        Pressione Enter para começar...
      </Typography>
    </Box>
  );
}

export default InstructionText;
