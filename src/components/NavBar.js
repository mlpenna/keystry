import { AppBar, Toolbar, Button } from "@mui/material";
import { startsNewGame } from "../lib/utils";

function NavBar({ setCharHistory, setCharText }) {
  return (
    <AppBar elevation={0} color="transparent" position="static">
      <Toolbar>
        <Button
          onClick={() => startsNewGame(setCharHistory, setCharText)}
          size="small"
          variant="outlined"
          color="inherit"
        >
          Reset
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
