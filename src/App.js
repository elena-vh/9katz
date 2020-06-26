import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Login } from "./components/Login.component";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Montserrat",
  },
  menuButton: {
    marginRight: theme.spacing(4),
    color: "white",
  },
  title: {
    flexGrow: 3,
    color: "white",
    fontFamily: "Montserrat",
  },
  button: {
    background: "rgb(231, 144, 100)",
    "&:hover": { background: "rgb(107, 62, 40)" },
    borderRadius: "20px",
    marginRight: theme.spacing(4),
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "15px",
  },
  "@global": {
    "@font-face": "Montserrat",
  },

  appbar: {
    boxShadow: 0,
  },
}));
const style = {
  background: "rgb(206, 94, 53)",
  border: 0,
  color: "black",
  height: 100,
  padding: "0 30px",
};

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const handleClick = () => {
    setShowLogin(!showLogin);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <ToolBar style={style} className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <MenuIcon className={classes.menu} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            page title
          </Typography>
          <Button
            onClick={handleClick}
            color="inherit"
            className={classes.button}
          >
            SIGN IN
          </Button>
        </ToolBar>
      </AppBar>

      {!showLogin ? <Login /> : null}
    </div>
  );
}
