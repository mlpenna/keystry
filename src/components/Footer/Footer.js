import { Grid } from "@mui/material";

function Footer() {
  return (
    <Grid
      sx={{
        position: "fixed",
        bottom: "0px",
        width: 1,
        py: "40px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Pressione Enter para iniciar um novo teste.
    </Grid>
  );
}

export default Footer;
