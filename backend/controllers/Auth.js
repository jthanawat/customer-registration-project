const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userInfo = await db.user.findOne({ where: { username } });
    const isValidUser =
      userInfo && bcrypt.compareSync(password, userInfo.password)
      if (!isValidUser) {
        res.status(400).send('username or password is wrong.')
      } else {
        res.status(200).send({
          token: jwt.sign({username}, process.env.SECRET_OR_KEY, {
            expiresIn: 6000 
          })
        })
      }
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}