import Event from "../Event/Event";
import User from "../User/User";
import Chat from "../Chat/Chat";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Home(props) {
  // console.log("!!!HOME!!!!");
  // console.log(props);
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isAdmin, setIsAdmin] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleLogout = (event) => {
    let path = `/`;
    navigate(path);

    props.childToParent({ isAdmin: false, isGuest: false });
    event.preventDefault();
    // setIsSubmitted(false);
    // setIsAdmin(false);

    // setOpen(true);
  };

  return (
    <div>
      {props.isAdmin || props.isGuest ? (
        <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {"User logged in successfully"}
            </Alert>
          </Snackbar>
          <Button
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogout}
          >
            {props.isAdmin ? 'Logout' : 'Login as admin'}
          </Button>
          <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                variant="fullWidth"
                aria-label="basic tabs example"
              >
                <Tab label="Event Table" {...a11yProps(0)} />
                <Tab label="User Table" {...a11yProps(1)} />
                <Tab label="Chat Table" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Event isAdmin={props.isAdmin} isGuest={props.isGuest} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <User isAdmin={props.isAdmin} isGuest={props.isGuest} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Chat isAdmin={props.isAdmin} isGuest={props.isGuest} />
            </TabPanel>
          </Box>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
}

export default Home;
