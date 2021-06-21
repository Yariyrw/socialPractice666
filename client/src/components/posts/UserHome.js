import AddPost from "./AddPost";
import UserBar from "./user-bar/UserBar";
import { makeStyles } from "@material-ui/core/styles";
import ExamplePost from "./user-bar/ExamplePost";
import GlobalConfig from "./user-bar/globalConfig/GlobalConfig";
import { queryPost } from "./queryPost";
import AllMemberPost from "./allMemberPost/AllMemberPost";
import ChatMain from '../chat/ChatMain';
import '../responsive-design/user-bar.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
  },
  navBar: {
    display: 'flex',
    justifyContent:' center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'2rem'
  }
});


function UserHome() {
  const classes = useStyles();
  let dataPosts = queryPost(localStorage.getItem("user"));

  return (
    <div>
      <div className={`${classes.wrapper} wrapper-responsive`}>
        {/* <div className={classes.navBar}>
          <ExamplePost /> 
        </div> */}
        <UserBar />

        <AddPost className={'responsive-add_post'}/>
        <AllMemberPost className={'responsive-search_member'}/>
        {/* <ChatMain className='sss'/> */}
      </div>
    </div>
  );
}

export default UserHome;
