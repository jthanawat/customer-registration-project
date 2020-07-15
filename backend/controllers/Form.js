const db = require('../models')

const getAllForms = async(req, res) => {
  const allForms = await db.Form.findAll()
  
  res.status(200).send(allForms)
}



module.exports = {
  getAllForms,
}