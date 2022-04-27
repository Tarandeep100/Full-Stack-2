import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";

import "./Admin.css";

const theme = createTheme();

function Admin(props) {
  // console.log("Inside Admin!");
  // console.log(props);
  // props.childToParent({isAdmin:false, isGuest:false});
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  // console.log({isSubmitted, isAdmin});
  
  
  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // setIsSubmitted(true);
        // setIsAdmin(true);
        // setOpen(true);
        setErrorMessages({});
        let path = `/home`;
        navigate(path);
        props.childToParent({isAdmin:true, isGuest:true})
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const handleGuest = (event) => {
    props.childToParent({isAdmin:false, isGuest:true})
    setOpen(true);
    // setIsSubmitted(true);
    setErrorMessages({});
    let path = `/home`;
    navigate(path);
  };

  // const handleLogout = (event) => {
  //   event.preventDefault();
  //   setIsSubmitted(false);
  //   setIsAdmin(false);

  //   setOpen(true);
  // };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  //   const renderForm1 = (
  //     <div className="form">
  //       <form onSubmit={handleSubmit}>
  //         <div className="input-container">
  //           <label>Username </label>
  //           <input type="text" name="uname" required />
  //           {renderErrorMessage("uname")}
  //         </div>
  //         <div className="input-container">
  //           <label>Password </label>
  //           <input type="password" name="pass" required />
  //           {renderErrorMessage("pass")}
  //         </div>
  //         <div className="button-container">
  //           <input type="submit" />
  //         </div>
  //       </form>
  //     </div>
  //   );

  const renderForm = (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="uname"
              label="Username"
              name="uname"
              autoComplete="uname"
              autoFocus
            />
            {renderErrorMessage("uname")}
            <TextField
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Password"
              type="password"
              id="pass"
            />
            {renderErrorMessage("pass")}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={handleGuest}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in as guest
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

  return (
    <>
      {(props.isGuest || props.isAdmin) ? <Navigate to={'/home'}/> : renderForm}
    </>
    // <div className="app">
    //   <div className="login-form">
    //     {isSubmitted && isAdmin ? (
    //       <Stack spacing={2} sx={{ width: "100%" }}>
    //         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //           <Alert
    //             onClose={handleClose}
    //             severity="success"
    //             sx={{ width: "100%" }}
    //           >
    //             Admin is successfully logged in
    //           </Alert>
    //         </Snackbar>
    //         <Button
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //           onClick={handleLogout}
    //         >
    //           Logout
    //         </Button>
    //       </Stack>
    //     ) : isSubmitted ? (
    //       <Stack spacing={2} sx={{ width: "100%" }}>
    //         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //           <Alert
    //             onClose={handleClose}
    //             severity="success"
    //             sx={{ width: "100%" }}
    //           >
    //             User is successfully logged in
    //           </Alert>
    //         </Snackbar>
    //         <Button
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //           onClick={handleLogout}
    //         >
    //           Logout
    //         </Button>
    //       </Stack>
    //     ) : (
    //       renderForm
    //     )}
    //     {/* {isSubmitted ? <Button
    //           onClick={handleLogout}
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Logout
    //         </Button> : null} */}
    //   </div>
    // </div>
  );
}

export default Admin;
