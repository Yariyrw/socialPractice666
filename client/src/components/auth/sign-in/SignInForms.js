import { Link } from "react-router-dom";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { validName, validTrimLogin, validTrimPassword } from "./validation";
import Loader from "../../loader/Loader";
import {sendDataSignIn} from "./sendDataSignIn";

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

function SignInForms() {
  const [error, setError] = useState(false);
  const [flag,setFlag] = useState(false);
  const classes = useStyles();
  const [errorSign,setErrorSign] = useState(false);
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
      const resSign = sendDataSignIn(data);
      setFlag(!flag)

      resSign.then(ress => {
        setErrorSign(ress.data.signError)
      })

    } else {
      setError(!error);
      setErrorSign(!errorSign)
      setFlag(!flag)

    }

    setData({ ...data, login: "", password: "" });
  };

 
  return (
    <div className={classes.root}>
      {errorSign && <span style={{color:'red',display:'flex',justifyContent:'center'}} >Ошибка ввода данных ! Проверьте правильность данных</span>}
      <form onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <TextField
            className={classes.margin}
            id={error ? "standard-error" : "input-with-icon-textfield"}
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
            name="password"
            value={data.password}
            type={'password'}
            onChange={handleChange}
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.buttonSignIn}>
          {flag ? <Loader /> : 
          <Button
          variant="contained"
          color="secondary"
          type="submit"
          startIcon={<LockOpenIcon />}
        >
          {error ? "Error" : "Sign In"}
        </Button>
          }
        </div>
      </form>
      <div className={classes.buttonSignIn}>
        У вас нет аккаунта?{" "}
        <Link className={classes.links} to="/sign-up">
          зарегистрироваться
        </Link>
      </div>
    </div>
  );
}

export default SignInForms;
