const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userShema = require("../../../models/userShema");

const signIn = async (req, res) => {
  const { login, password } = req.body.data;

  console.log(req.body);
  try {
    const user = await userShema.find({ login: login });
    const passUserDB = [];
    if (user.length) {
      user.forEach((el) => passUserDB.push(el.password));
      const passResult = bcrypt.compareSync(password, passUserDB[0]);
      if (passResult) {
        const token = jwt.sign(
          {
            password: passUserDB,
          },
          "dev-jwt",
          { expiresIn: 60 * 60 }
        );
        res.status(200).json({
          success: true,
          dataUser: login,
          webToken: token,
          redirectURL: "/articles",
        });
      }
    }
    else {
      res.status(200).json({
        signError:true
      })
    }
  } catch (err) {
    res.status(400);
  }
};

module.exports = signIn;
