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
import AllMemberPost from "../allMemberPost/AllMemberPost";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minHeight: "17rem",
    minWidth: "15rem",
    textAlign: "center",
    width: "25%",
    height: "20%",
    color: "white",
    backgroundColor: "black",
    opacity: "80%",
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
  wrap: {
    display:'flex',
    flexDirection:'column'
  },
  borderAvatar: {
    backgroundColor:'gray',
    color:'white',
    opacity:'80%',
    width:'3rem',
    height:'3rem',
    borderRadius:'50%',
    display:'flex',
    justifyContent:'center',
    cursor:'pointer'
  },
  menuWrap: {
    margin:'2rem',
  },
  member: {
    display:'flex',
    justifyContent:'center',
    marginTop:'1rem'
  }
}));

function UserBar() {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });
  let dataPosts = queryPost(localStorage.getItem("user"));
  const [flag, setFlag] = useState(false);

  const exitPage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("posts");
    if (localStorage.removeItem("membersPost")) {
      localStorage.removeItem("membersPost");
    }
    window.location.reload("/");
  };

  const showLinks = () => {
    setFlag(!flag);
  }
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.borderAvatar} onClick={showLinks}>
          <h1>{localStorage.getItem("user").split("")[0].toUpperCase()}</h1>
        </div>
        {flag ?
        <div className={styles.menuWrap}>
          <hr />
        <Link to="/all-post" className={styles.linkPost}>
          Мои Посты
        </Link>
        <div className={styles.member}>
        <AllMemberPost className={'responsive-search_member'}/>
        </div>
        <div className={styles.member}>
        <ExitToAppIcon onClick={exitPage} />
        </div>
        </div>
        :<span>Профиль</span>}
        
      </div>
    </div>
    // <Card className={cx(styles.card, shadowStyles.root)}>
    //   
    //   <CardContent >
    //     {/* <Avatar className={styles.avatar} src={"https://i.pravatar.cc/300"} /> */}

    //     <h3 className={styles.heading}>{localStorage.getItem("user")}</h3>
    //     <span className={styles.subheader}>Ukraine</span>
    //   </CardContent>{" "}
    //   <Divider light />
    //   <Box display={"flex"}>
    //     {/* <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
    //       <p className={styles.statLabel}>Количество постов</p>
    //       {!flag ? (
    //         <VisibilityIcon onClick={() => setFlag(!flag)} />
    //       ) : (
    //         <VisibilityOffIcon onClick={() => setFlag(!flag)} />
    //       )}
    //       {flag && (
    //         <p className={styles.statValue}>
    //           {localStorage.getItem("posts")
    //             ? JSON.parse(localStorage.getItem("posts")).length
    //             : 0}
    //         </p>git
    //       )}
    //     </Box> */}
    //     <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
    //       <Link to="/all-post" className={styles.linkPost}>
    //         Мои Посты
    //       </Link>
    //     </Box>{" "}
    //   </Box>{" "}
    // </Card>
  );
}

export default UserBar;
