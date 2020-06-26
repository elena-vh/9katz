import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./Styles.component";
import { create } from "apisauce";
import Alert from "@material-ui/lab/Alert";

export const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const initialFormData = Object.freeze({ email: "", password: "" });
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUser();
    setShowAlert(true);
  };

  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };
  const baseURL = "https://jsonplaceholder.typicode.com";
  const api = create({
    baseURL: baseURL,
    headers: headers,
    timeout: 15000,
  });

  // start making calls

  const submitUser = async () => {
    const response = await api.get("./users");

    response.data.map((el, i, arr) => {
      if (el.email === formData.email) {
        console.log(response.data[i]);
      }
      return response.data[i];
    });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6" className={classes.typo}>
          Hey, good to see you again!
        </Typography>
        <Typography component="h1" variant="h5" className={classes.login}>
          Sign In
        </Typography>

        {showAlert ? (
          <Alert severity="error" className={classes.alert}>
            Sorry, we can't find an account with this email address. Please try
            again or create a new account.
          </Alert>
        ) : null}

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="default" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" className={classes.link}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};
