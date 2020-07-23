const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwtDecode = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    const { username, password, firstName, lastName, employeeId } = req.body;
    await db.User.find({ where: { username: jwtDecode(JSON.stringify(req.headers.authorization)).username } })
      .then(requestUser => {
        if (requestUser.isAdmin) {
          db.User.create({ username, password: bcryptjs.hashSync(password, bcryptjs.genSaltSync(12)), firstName, lastName, employeeId })
            .then(result => res.status(200).send({ message: 'User Created!' }))
        } else res.status(401).send({ message: 'Unauthorized Request' })
      })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

exports.listAllUser = (req, res, next) => {
  try {
    db.User.findOne({ where: jwtDecode(JSON.stringify(req.headers / authorization)).login_name })
      .then(requestUser => {
        if (requestUser.isAdmin) {
          db.User
            .findAll({ attribues: ['username', 'password', 'firstName', 'lastName', 'employeeId', 'isAdmin'] })
            .then(result => res.status(200).send({ message: 'These are the users!' }))
        } else res.status(401).send({ message: 'Unauthorize Request!' })
      })
  } catch (err) {
    res.status(401).send({ message: 'Unauthorized Request!' })
  }
};

exports.updateUser = (req, res, next) => {
  try {
    const { username, password, firstName, lastName, employeeId } = req.body;
    db.User.findOne({ where: { username: jwtDecode(JSON.stringify(req.headers.authorization)).username } })
      .then(requestUser => {
        if (requestUser.isAdmin) {
          db.User.update({ username, password, firstName, lastName, employeeId }, { where: { username: req.body.username } })
            .then(result => res.status(200).send({ message: 'User Info. has been updated!' }))
        } else res.status(401).send({ message: 'Unauthorize request!' })
      })
  } catch (err) {
    res.status(401).send({ message: 'Unauthorize Request!' })
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.User.destroy({ where: { id } })
    res.status(200).send()
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}