import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    overflow: "hidden",
    marginTop: "80px",
    fontFamily: "Montserrat",
    backgroundColor: "white",
    left: "100px",
    width: "75%",
    height: "50%",
    maxWidth: "500px",
    maxHeight: "700px",
    borderRadius: "50px",
    padding: "50px",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "rgb(206, 94, 53)",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    fontFamily: "Montserrat",
    color: "rgb(206, 94, 53)",
  },
  submit: {
    background: "rgb(206, 94, 53)",
    "&:hover": {
      background: "rgb(107, 62, 40)",
    },
    margin: theme.spacing(3, 0, 2),
    fontFamily: "Montserrat",
  },
  typo: {
    marginTop: theme.spacing(3),
    fontFamily: "Montserrat",
    color: "rgb(206, 94, 53)",
  },
  login: {
    marginTop: theme.spacing(3),
    fontFamily: "Montserrat",
  },

  link: {
    fontFamily: "Montserrat",
    color: "rgb(206, 94, 53)",
  },
  alert: {
    marginTop: "30px",
  },
}));
