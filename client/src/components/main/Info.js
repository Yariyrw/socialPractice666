import React, { useState } from "react";
import { Redirect } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import "./css/style.css";
import CardInfo from "./CardInfo";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  root: {
    margin: 0,
    padding: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "30rem",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  alerts: {
    transform: "scale(3.5)",
  },
});

function Info() {
  const classes = useStyles();
  const [notification, setNotification] = useState(false);

  const showMessage = () => {
    setNotification(!notification);
  };

  const closeMenu = () => {
    setNotification(!notification);
  };

  return (
    <div className={classes.root}>
      {/* <div className={classes.container}>
        <AddAlertIcon
          className={`${classes.alerts} ${!notification && "alerts"}`}
          style={{ display: notification && "none" }}
          onClick={showMessage}
        />
      </div> */}
      {/* {notification && <CardInfo menuClose={closeMenu} />} */}
      <CardInfo  />
    </div>
  );
}

export default Info;
