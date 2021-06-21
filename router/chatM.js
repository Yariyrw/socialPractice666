const chatMessage = require("../models/chatMessage")

const handleMessage = async (req,res) => {
    try {
        const dataUser = [];
         chatMessage.find({},(err,result) => {
            result.map(el => {
                // console.log('data db',el)
                dataUser.push({user:el.data.user,messages:{message:el.data.msg.message}}) 
            })
            console.log(dataUser)
            res.status(200).json({
                messageData:dataUser
            })
         });

         
    }catch(err) {
        throw err;
    }
}

module.exports = handleMessage;
