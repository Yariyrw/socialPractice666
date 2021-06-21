import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import CancelIcon from "@material-ui/icons/Cancel";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
  },
  container: {
    height: "30rem",
    textAlign: "center",
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  exit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    marginTop: "1rem",
    margin: 0,
  },
  textWelcome: {
    fontWeight: "bold",
  },
});

function CardInfo(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.container}>
          <CardContent className={classes.info}>
            <Typography gutterBottom variant="h5" component="h1">
              Добро пожаловать!!
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.textWelcome}
            >
              На этом сайте вы можете делиться своими новостями и эмоциями ввиде
              постов, также делиться этим с друзьями и прекрасно провести время.
              Что именно вы можете сделать:
              <hr />
              <div className={classes.list}>
                <ol>
                  <li>Создавать посты</li>
                  <li>Просмотр постов других пользователей
                    
                  </li>
                </ol>
              </div>
            </Typography>
          </CardContent>
          <CardActions className={classes.exit}>
            {/* <CancelIcon onClick={props.menuClose} /> */}
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default CardInfo;
