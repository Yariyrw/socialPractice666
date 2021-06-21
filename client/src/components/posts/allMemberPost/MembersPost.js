import MembersPostList from './MemberPostList';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";


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
  
function MembersPost () {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Link to="/all-member-post">
          <ArrowBackIosIcon className={classes.linkBack}/>
        </Link>
            {JSON.parse(localStorage.getItem('membersData')).length &&
             JSON.parse(localStorage.getItem('membersData')).map(el => 
             <MembersPostList 
             title={el.title}
             desc={el.desc}
             text={el.text}
             date={el.date}
             /> 
             )
             }
        </div>
    )
}

export default MembersPost;