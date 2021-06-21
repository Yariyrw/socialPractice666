import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Link } from "react-router-dom";

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

function MembersPostList(props) {
    const {title,desc,text,date} = props;
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        
      </div>
          <div>
            <Card className={cx(classes.root, shadowStyles.root)}>
              <BrandCardHeader
                image={
                  "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
                }
                extra={date}
              />
              <CardContent className={classes.content}>
                <TextInfoContent
                  classes={styles}
                  overline={desc}
                  heading={title}
                  body={text}
                />
              </CardContent>
            </Card>
          </div>
    </div>
  );
}
export default MembersPostList;
