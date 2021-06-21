import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { queryPost } from "./queryPost";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    borderRadius: 20,
    margin: "2rem",
  },
  content: { padding: 24 },
  wrapper: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  linkBack: {
    color: "black",
  },
}));

function AllPost() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        <Link to="/articles" className={classes.linkBack}>
          <ArrowBackIosIcon />
        </Link>
      </div>
      {localStorage.getItem("posts") ? (
        JSON.parse(localStorage.getItem("posts")).map((el, i) => (
          <div>
            <Card className={cx(classes.root, shadowStyles.root)}>
              <BrandCardHeader
                image={
                  "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
                }
                extra={el.date}
              />
              <CardContent className={classes.content}>
                <TextInfoContent
                  classes={styles}
                  overline={el.desc}
                  heading={el.title}
                  body={el.text}
                />
              </CardContent>
            </Card>
          </div>
        ))
      ) : (
        <h1>Постов пока что нету!!!</h1>
      )}
    </div>
  );
}
export default AllPost;
