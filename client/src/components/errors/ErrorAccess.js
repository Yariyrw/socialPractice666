import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'center',
    marginTop:'3rem'    
  },
  media: {
    height: 100,
  },    
  wrapper: {
      textAlign:'center'
  },
  linkAuth: {
      textDecoration:'none',
      color:'white'
  },
  btnAuth: {
      display:'flex',
      justifyContent:'center'
  },
  iconError: {
    transform: 'scale(3.5)',
  }
});

function ErrorAccess() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    <Card className={classes.wrapper}>
      <CardActionArea>
         <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
        />
              <ErrorIcon className={classes.iconError}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ошибка !!!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Для доступа, пожалуйста авторизируйтесь.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnAuth}>
            <Button variant="contained" color="secondary" >
                <Link className={classes.linkAuth} to='/sign-in'>Login</Link> 
            </Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default ErrorAccess;