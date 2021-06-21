import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import HomeIcon from '@material-ui/icons/Home';
import '../responsive-design/user-bar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    
  },
  linkAuth: {
    textDecoration: "none",
    color: "black",
    padding: "0px 10px",
  },
  userInfo: {

    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor:'white',
    color:'black',

  }
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={`${classes.userInfo} header-responsive`}>
          <Typography variant="div" className={classes.title}>
            <Link to="/" className={classes.linkAuth}>
               <HomeIcon /> 
            </Link>
            <Link to="/articles" className={classes.linkAuth}>
              Личный кабинет
            </Link>
          </Typography>
          {/* {localStorage.getItem("user") ? (
            <div className={classes.userName}>
              <div>
                <SentimentVerySatisfiedIcon />
              </div>
              <div>{localStorage.getItem("user")}</div>
            </div>
          ) : (
            <div className={classes.userName}>
              <div>
                <SentimentVeryDissatisfiedIcon />
              </div>
              <div>Гость</div>
            </div>
          )} */}
          <Button variant="contained" color="secondary">
            <Link className={classes.linkAuth} to="/sign-in">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Main;
