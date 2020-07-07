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
    authenticate();
    setShowAlert(true);
  };

  // const headers = {
  // //  "Content-type": "application/json",
  // };
  const baseURL = "http://51.91.123.86/";
  const api = create({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 10000,
  });

  const authenticate = async () => {
    const response = await api.post("/auth", formData);
    if (response.ok) {
      console.log(response.data);
      if (response.data) {
        api.setHeader("Authorization", "Bearer " + response.data);

        console.log(api.headers);
        console.log(api);
        const getData = await api.get("/users");
        console.log(api);
        console.log(getData);
      }
    }
  };

  // , {
  //             headers: { Authorization: `Bearer ${tokens.jwtToken}` },
  //           }
  // api.addResponseTransform((response) => {
  //   if (response.ok) {
  //     if (response.data) {
  //       tokens.jwtToken = response.data;
  //       console.log(tokens.jwtToken);
  //       //alert("OK");
  //       //api.setHeader("Authorization", `Bearer ${tokens.jwtToken}`);
  //       api
  //         // .setHeader("Authorization", `Bearer ${tokens.jwtToken}`)

  //         .get("/users", {
  //           headers: { Authorization: `Bearer ${tokens.jwtToken}` },
  //           "Content-type": "application/json; charset=UTF-8; xml",
  //         })
  //         // .setHeader("Authorization", `Bearer ${tokens.jwtToken}`)

  //         .then((res) => console.log(res))
  //         .catch((error) => console.log(error));
  //     }
  //   }
  // });
  //api.setHeader("Authorization", `Bearer ${tokens.jwtToken}`);

  //api.setHeader("Authorization", `Bearer ${tokens.jwtToken}`);
  // api.addRequestTransform((request) => {
  //   request.headers["Authorization"] = `Bearer ${tokens}`;
  //   console.log(request);

  // if (response.ok) {
  //   if (response.data) {
  //     tokens.jwtToken = response.data;
  //     console.log(response);
  //   }
  //}
  //});
  //   if (tokens.jwtToken) {
  //     request.config.headers.Authorization = `Bearer ${tokens.jwtToken}`;
  //     console.log(request.config.headers);
  //   }
  // });
  //email: "admin@thinslices.com",
  //    password: "qwe123",
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
