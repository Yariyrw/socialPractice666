const userShema = require("../../models/userShema");

const queryPost = (req,res) => {
    const { name } = req.body.data;
    // console.log(name
//   let dataClient = []
  userShema.findOne({ login: name }, (err, result) => {
      res.status(200).json({
          postData:result.posts
      })
  });

}

module.exports = queryPost;