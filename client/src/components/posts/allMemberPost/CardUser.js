import React, { useState } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import { Link } from "react-router-dom";
import { queryPost } from "../queryPost";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    width: "25%",
    height: "20%",
    margin: "1rem",

  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  linkPost: {
    textDecoration: "none",
    color: "black",
  },
  wrapper : {
      display:'flex',
      flexWrap:'wrap'
  }
}));

function UserBar(props) {
  const {loginUser,postUsers,userId} = props;
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });

  const sendDataMembers = () => {
      console.log(JSON.stringify(postUsers  ))
      localStorage.setItem('membersData',JSON.stringify(postUsers))
  }

  return (
      <div className={styles.wrapper}>
    <Card className={cx(styles.card, shadowStyles.root)} 
    style={{border: localStorage.getItem('user') === loginUser && '2px solid green'}}>
      <CardContent>
        <Avatar className={styles.avatar} src={"https://i.pravatar.cc/300"} />
        <h3 className={styles.heading}>{loginUser}</h3>
        <span className={styles.subheader}>Ukraine</span>
      </CardContent>{" "}
      <Divider light />
      <Box display={"flex"}>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Количество постов</p>
            <p>{postUsers.length}</p>
        </Box>
        <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
          <Link to="/members-post" className={styles.linkPost} onClick={sendDataMembers}>
            Смотреть Посты
          </Link>
        </Box>{" "}
      </Box>{" "}
    </Card>
    </div>
  );
}

export default UserBar;
