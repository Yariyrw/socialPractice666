import React, { useState } from "react";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import TextField from "@material-ui/core/TextField";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import { sendPostServer } from "./sendPostServer";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(() => ({
  root: { maxWidth: 343, borderRadius: 20, width: "25rem" },
  content: { padding: 24 },
  margin: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
  forms: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonPost: {
    display: "flex",
    justifyContent: "center",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function PostForm() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const classes = useStyles();

  const getData = () => {
    var maxDate = new Date();
    var isoDate = maxDate.toISOString(); // 2014-08-05T19:42:51.429Z
    let date = isoDate.substr(0, 20).split("T"); // 2014-08-05
    return `${date[0]} в ${date[1]}`;
  };
  let time = getData();

  const [data, setData] = useState({
    title: "",
    desc: "",
    text: "",
    date: time,
    dateEdit: "none",
  });
  const [success,setSuccess] = useState(false)

  const successData = (value) => {
    setSuccess(value);
    setTimeout(() => {
      setSuccess(!value)
    },1000)
  }

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPostServer(data, [localStorage.getItem("user")],successData);
    setData({ ...data, title: "", desc: "", text: "", date: "" });
  };
  return (
    <Card className={cx(classes.root, shadowStyles.root)}>
      <CardContent className={classes.content}>
        <form onSubmit={handleSubmit}>
          <div className={classes.forms}>
            <TextField
              id="standard-basic"
              name={"title"}
              value={data.title}
              onChange={handleChange}
              label="Заголовок"
            />
            <TextField
              id="standard-basic"
              name={"desc"}
              value={data.desc}
              onChange={handleChange}
              label="описание "
            />
            <TextField
              id="standard-basic"
              name={"text"}
              value={data.text}
              onChange={handleChange}
              label="текст"
            />
          </div>
          <div className={classes.buttonPost}>
          {success ? <CheckCircleIcon className={classes.successIcon}/> : 
              <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                className={classes.margin}
                type={"submit"}
              >
                Создать пост
              </Button>
            </ThemeProvider>
          }
          </div>
        </form>
      </CardContent>{" "}
    </Card>
  );
}
export default PostForm;
