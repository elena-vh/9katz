import React from "react";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
//import { createGlobalStyle } from "styled-components";
//import Montserrat from "./fonts/Montserrat-SemiBold.ttf";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  custom: {
    fontFamily: THEME.typography.fontFamily,
  },
}));
const style = {
  background: "linear-gradient(45deg, #5fadbf 30%, #ffebc1 90%)",
  borderRadius: 3,
  border: 0,
  color: "black",
  height: 60,
  padding: "0 30px",
};
// const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: Montserrat;
//     src: url(${Montserrat}) format ('woff2);
//     font-weight: 600;
//     font-display: "swap";
// }`;
const montserrat = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  fontDisplay: "swap",
  src: `local('Montserrat SemiBold'),
        local('Montserrat-SemiBold'),
        url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2)
format('woff2')`,
  //   src: `local('Montserrat-SemiBold'),
  //         local('Montserrat-SemiBold'),
  //         url(${Montserrat}) format ('ttf')
  // `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};
const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Montserrat","Helvetica,"Arial",sans-serif`,
    fontSize: 16,
    fontWeight: 600,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [montserrat],
      },
    },
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={THEME}>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <ToolBar style={style}>
            {console.log(style)}

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </ToolBar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}
