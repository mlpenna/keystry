import { Typography, Container } from "@mui/material";

function EndGameStats({ wpm, acc }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        border: 1,
        borderRadius: 16,
        minHeight: "300px",
        py: "10px",
      }}
    >
      <Typography
        variant="h6"
        component="body"
        sx={{
          padding: 2,
          backgroundColor: "transparent",
          fontSize: 29,
          color: "#fafafa",
        }}
      >
        STATS
      </Typography>
      <Typography
        variant="h6"
        component="body"
        sx={{
          padding: 2,
          backgroundColor: "transparent",
          fontSize: 29,
          color: "#fafafa",
        }}
      >
        WPM: {wpm}
      </Typography>
      <Typography
        variant="h6"
        component="body"
        sx={{
          padding: 2,
          backgroundColor: "transparent",
          fontSize: 29,
          color: "#fafafa",
        }}
      >
        ACC: {acc * 100 + "%"}
      </Typography>
    </Container>
  );
}

export default EndGameStats;
