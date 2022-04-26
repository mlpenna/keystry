import { AppBar, Toolbar, IconButton } from "@mui/material";
// import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import MainTitle from "../MainTitle/MainTitle";

import { startsNewGame } from "../../lib/utils";

function NavBar({ setCharHistory, setCharText, setKeystrokeCounter }) {
  return (
    <AppBar elevation={0} color="transparent" position="static" sx={{
      mb: 15,
    }}>
      <Toolbar>
        <MainTitle />
        {/* <IconButton
          onClick={() =>
            startsNewGame(setCharHistory, setCharText, setKeystrokeCounter)
          }
          size="small"
          variant="outlined"
          color="inherit"
        >
          <ReplayOutlinedIcon />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
