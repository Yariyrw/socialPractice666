const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
require("dotenv");
const path = require("path");
const webSocketServer = require('websocket').server;
const chatMessage = require('./models/chatMessage');
const http = require('http');

mongoose.connect(
  `mongodb+srv://artemDev:18062001@cluster0.vh6xp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);


const server = http.createServer(app)


const wsServer = new webSocketServer({
    httpServer:server
})

const client = {};

const getUniqueID = () => {
    const s4 = () => Math.floor((1 - Math.random()) * 1000)
}

wsServer.on('request',request => {
    var userId = getUniqueID();
    console.log((new Date()) +  'Okay' + request.origin)
    const connection = request.accept(null,request.origin)
    client[userId] = connection;

    connection.on('message',message => {
        if (message.type == 'utf8') {
            // const messageSend = new chatMessage({
            //     data:JSON.parse(message.utf8Data),
            // });
            // messageSend.save();
            console.log('Recive message',JSON.parse(message.utf8Data)); //принимаем данные
            for (key in client) {
                client[key].sendUTF(message.utf8Data); //отправлям данные
                // console.log('sent message to',client[key])
            }
        }
    })
})


const PORT = process.env.PORT || 3008;
app.use(cors());
app.use(bodyParser());
app.use(express.static("client/build"));



app.post("/sign-in", require("./router/auth/sign-in/signIn"));
app.post("/sign-up", require("./router/auth/sign-up/signUp"));
app.post("/create-post", require("./router/posts/addPost"));
app.post("/get-post", require("./router/posts/queryPost"));
app.get("/all-member-post", require("./router/all-members/queryMembers"));
// app.get("/articles", require("./router/chatM"));

app.get("/*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.get("/", (req, res) => {
  res.send("Okey");
  console.log("okay");
});

// app.listen(PORT);
server.listen(PORT);

