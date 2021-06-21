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
   
  }, 
  wrapper: {
      textAlign:'center',
      border: '2px solid red',
  },
  
 
});

function ErrorAccess() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    <Card className={classes.wrapper}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ошибка !!!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Проверьте валидность данных!!!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default ErrorAccess;