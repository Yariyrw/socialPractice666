import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import ChatIcon from '@material-ui/icons/Chat';
import axios from 'axios';
// import '../responsive-design';

const client = new W3CWebSocket("ws://127.0.0.1:3008");//wss://social-hell.herokuapp.com

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '20rem',
    height: "20rem",
    width: "20rem",
    borderRadius: 20,
    margin: "2rem",
    backgroundColor:'#f7f7f7'
  },
  content: {
       padding: 24,
       height:'50%',
       overflowX:'hidden'
    },
    inputContent: {
        height:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
  wrapper: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  messageStyle: {
      width:'50%',
      padding:'1rem',
      margin:'.5rem',
      maxWidth: '11rem',
      maxHeight: '15rem',
      overFlowX:'hidden'
  },
  iconSend : {
      transform:'scale(1.5)',
      margin:'.8rem'
  },
  messageTextStyle: {
      marginTop:'5px',
      fontFamily:'system-ui'
  },
  messageUserText: {
      fontWeight:'bold',
      fontSize:'1.2rem',
      color:'#ec1c1c',
  },
  titleChat: {
      color:'black',
      display:'flex',
      justifyContent:'center',
      fontSize:'1.5rem',
      alignItems:'center'
  }
}));

function ChatMain() {
  const classes = useStyles();
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();

  const [data, setData] = useState({
    message: "",
  });
  // let t = JSON.parse(localStorage.getItem('chat-message'));
// console.log(t)
  
  const [mData, setMData] = useState({
    messageS: []
  });

  const [dataServer,setDataServer] = useState()

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.send(
      JSON.stringify({
        type: "message",
        msg: data,
        user: localStorage.getItem('user'),
      })
    );
  };

  useEffect(() => {
    //  axios.get('https://social-hell.herokuapp.com/articles')
    //  .then(response => {
    //     console.log(response.data);

    //       setMData({...mData,
    //         messageS:[...response.data.messageData]
    //       })
        
        
    // }).catch(err => console.log(err))

    // client.onopen = () => {
    //   console.log("WebSocker is run");
    // };
    // client.onmessage = (message) => {
    //   const dataFromServer = JSON.parse(message.data);
    //   console.log("got reply", dataFromServer);
    //   if (dataFromServer.type == "message") {
    //     setMData({
    //       ...mData,
    //       messageS: [
    //         ...mData.messageS,
    //         {
    //           user: dataFromServer.user,
    //           messages: dataFromServer.msg,
    //         },
    //       ],
    //     });
    //   }
    // };


    client.onopen = () => {
      console.log("WebSocker is run");
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("got reply", dataFromServer);
      if (dataFromServer.type == "message") {
        setMData({
          ...mData,
          messageS: [
            ...mData.messageS,
            {
              user: dataFromServer.user,
              messages: dataFromServer.msg,
            },
          ],
        });
      }
    };
     

  },[]);

  return (
    <div className={classes.wrapper}>
      <div>
        <Card className={`${cx(classes.root, shadowStyles.root)} chat-wrapper`}>
          <CardContent className={classes.content}>
              <div className={classes.titleChat}>
                <ChatIcon />
                  Chat
                </div>
            {mData.messageS.map((el) => (
              <Card className={classes.messageStyle} style={{backgroundColor: el.user === localStorage.getItem('user') && 'black'}}>
                <div className={classes.messageUserText} style={{color: el.user === localStorage.getItem('user') && '#7aacf5'}}>{el.user}</div>
                <div className={classes.messageTextStyle} style={{color: el.user === localStorage.getItem('user') && 'white'}}>{el.messages.message}</div>
              </Card>
            ))}
          </CardContent>
          <div className={classes.inputContent}>
                <TextField
                id="outlined-basic"
                label="Введите текст"
                variant="outlined"
                name="message"
                value={data.message}
                onChange={handleChange}
                />
                <SendIcon onClick={handleSubmit} className={classes.iconSend}/>
              </div>
        </Card>
      </div>
    </div>
  );
}

export default ChatMain;

