import { AppBar, Toolbar, IconButton } from "@mui/material";
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { startsNewGame } from "../lib/utils";

function NavBar({ setCharHistory, setCharText, setKeystrokeCounter }) {
  return (
    <AppBar elevation={0} color="transparent" position="static">
      <Toolbar>
        <IconButton
          onClick={() => startsNewGame(setCharHistory, setCharText, setKeystrokeCounter)}
          size="small"
          variant="outlined"
          color="inherit"
        >
          <ReplayOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
