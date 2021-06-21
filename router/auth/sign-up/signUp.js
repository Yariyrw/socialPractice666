const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const config = require("config");
const bcrypt = require('bcrypt')
const userShema = require("../../../models/userShema");

const signUp = async (req, res) => {
  const { login, password } = req.body.data;
  try {
    let passwordHash = bcrypt.hashSync(password, 15);

    const newUser = new userShema({
      id: Math.floor(Math.random() * 99999),
      login: login,
      password: passwordHash,
      posts: [],
    });
    newUser.save();
     res.status(200).json({
      register:true
    })
  } catch (err) {
    res.status(400).json({
      register:false
    });
  }
};

module.exports = signUp;
