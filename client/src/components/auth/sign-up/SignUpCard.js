import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SignUpForms from "./SignUpForms";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: "1rem",
  },

  actionForm: {
    width: "35rem",
  },
});

function SignUpCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Registration
          </Typography>
        </CardContent>
        <CardActions>
          <div className={classes.actionForm}>
            <SignUpForms />
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default SignUpCard;
