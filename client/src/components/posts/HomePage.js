import ErrorAccess from '../errors/ErrorAccess';
import UserHome from './UserHome';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      
    },
    media: {
      height: 140,
    },
  });

function HomePage () {
    const classes = useStyles();
    
    return (
        <div>
            {!localStorage.getItem('token') ? <ErrorAccess /> : <UserHome />}
        </div>
    )
}

export default HomePage;