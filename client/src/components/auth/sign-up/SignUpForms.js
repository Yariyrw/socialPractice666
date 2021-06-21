import { Link } from "react-router-dom";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import {
  validName,
  validTrimLogin,
  validTrimPassword,
} from "../sign-in/validation";
import Loader from "../../loader/Loader";
import ErrorSign from '../../errors/ErrorSign';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  buttonSignIn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  links: {
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "5px",
    color: "black",
  },
}));

function SignUpForms() {
  const classes = useStyles();
  const [flag,setFlag] = useState(false)
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validName(data) && !validTrimLogin(data) && !validTrimPassword(data)) {
      setFlag(!flag);
      import("./sendDataSignUp").then((func) => func.sendDataSignUp(data));
    } else {
      setError(!error);
    }

    setData({ ...data, login: "", password: "" });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          {error && <ErrorSign />}
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="Login"
            name="login"
            value={data.login}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="Password"
            name="password"
            type={'password'}
            value={data.password}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.buttonSignIn} >
          {flag ? <Loader /> : 
           <Button
           variant="contained"
           color="secondary"
           type="submit"
           startIcon={<LockOpenIcon />}
         >
            Sign up
         </Button>
          }
         
        </div>
      </form>
    </div>
  );
}

export default SignUpForms;
