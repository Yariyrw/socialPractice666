const userShema = require("../../models/userShema");

const addPost = (req, res) => {
  const { user } = req.body.data;
  let dataClient = [];
  userShema.findOne({ login: user }, (err, result) => {
    result.posts.push(req.body.data);
    return result.save();
  });

  res.status(200)
};

module.exports = addPost;
