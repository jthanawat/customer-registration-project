const db = require('../models')
const { Op } = require('sequelize');
const sequelize = require('sequelize')
const chalk = require('chalk');
const countRecord = require('../helpers/countResponse')

exports.createForm = async (req, res, next) => {
  try {
    const { locationId, firstName, lastName, email, companyName, phoneNumber, purposeId, contactPersonName, PurposeId, cardName } = req.body;
    const { id } = req.params;

    await db.Form.create({ locationId, firstName, lastName, email, companyName, phoneNumber, purposeId, contactPersonName, PurposeId, cardName, moduleType: id, dateCreated: new Date() })
    res.status(200).send({ message: 'form created!' })

  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

exports.getForm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const form = await db.Form.findOne({where: { id }})
    res.status(200).send({form})

  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

exports.getAllLocation = async (req, res, next) => {
  try {

    const form = await db.Form.findAll({include: db.Location })
    res.status(200).send({form})
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

exports.countResponse = async (req, res, next) => {
  try {
    

    const { countResponseADayByModule1, countResponseADayByModule2, countResponseADayByModule3, countResponseAllModule, countResponseADayAllModule } = await countRecord.countResponseByDay()







    console.log(chalk.bgGreen.bold(countResponseAllModule))

    res.status(200).send({
      totalResponseAllModule: countResponseAllModule,
      responseByModule: {
        module1: countResponseByModule1,
        module2: countResponseByModule2,
        module3: countResponseByModule3
      },
      totalResponseADayAllModule: countResponseADayAllModule,
      responseADayByModule: {
        module1: countResponseADayByModule1,
        module2: countResponseADayByModule2,
        module3: countResponseADayByModule3,
      },
      responseAWeekByModule: {
        module1: countResponseAWeekByModule1,
        module2: countResponseAWeekByModule2,
        module3: countResponseAWeekByModule3,
      },
      responseAMonthByModule: {
        module1: countResponseAMonthByModule1
      },
      responseAYearByModule: {
        module1: countResponseAYearByModule1
      }
    })

  } catch (err) {
    res.status(500).send({ message: err.message })
    // console.log(err)
  }
}

exports.countProduct = async (req, res, next) => {
  try {
    // ================== Variable to convert timezone +7hrs. ==================
    let date = new Date();
    const myTimeZone = 7;

    // ================== Count A Day ==================
    let startDateADay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    startDateADay = date.setTime(startDateADay.getTime() + myTimeZone * 60 * 60 * 1000)
    startDateADay = date.toISOString()

    let endDateADay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
    endDateADay = date.setTime(endDateADay.getTime() + myTimeZone * 60 * 60 * 1000)
    endDateADay = date.toISOString()

    const countProductADayAllModule = await db.Form.findAll({ group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })
    const countProductADayModule1 = await db.Form.findAll({ where: { moduleType: '1' }, group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })
    const countProductADayModule2 = await db.Form.findAll({ where: { moduleType: '2' }, group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })
    const countProductADayModule3 = await db.Form.findAll({ where: { moduleType: '3' }, group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })

    // ================== Count A All Time ==================
    const countProductAllModule = await db.Form.findAll({ group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })
    const countProductModule1 = await db.Form.findAll({ where: { moduleType: '1' }, group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })
    const countProductModule2 = await db.Form.findAll({ where: { moduleType: '2' }, group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })
    const countProductModule3 = await db.Form.findAll({ where: { moduleType: '3' }, group: ['ProductId'], attributes: ['ProductId', [sequelize.fn('COUNT', 'ProductId'), 'ProductCount']] })

    res.status(200).send({
      totalProductAllModule: countProductAllModule,
      productByModule: {
        module1: countProductModule1,
        module2: countProductModule2,
        module3: countProductModule3
      },
    })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}






exports.countPurpose = async (req, res, next) => {
  try {
    const countPurposeAllModule = await db.Form.findAll({ group: ['PurposeId'], attributes: ['PurposeId', [sequelize.fn('COUNT', 'PurposeId'), 'PurposeCount']] })
    const countAllPurposeModule1 = await db.Form.findAll({ where: { moduleType: '1' }, group: ['PurposeId'], attributes: ['PurposeId', [sequelize.fn('COUNT', 'PurposeId'), 'PurposeCount']] })
    const countAllPurposeModule2 = await db.Form.findAll({ where: { moduleType: '2' }, group: ['PurposeId'], attributes: ['PurposeId', [sequelize.fn('COUNT', 'PurposeId'), 'PurposeCount']] })
    const countAllPurposeModule3 = await db.Form.findAll({ where: { moduleType: '3' }, group: ['PurposeId'], attributes: ['PurposeId', [sequelize.fn('COUNT', 'PurposeId'), 'PurposeCount']] })

    res.status(200).send({
      totalPurposeAllModule: countPurposeAllModule,
      countPurposeByModule: {
        module1: countAllPurposeModule1,
        module2: countAllPurposeModule2,
        module3: countAllPurposeModule3
      }
    })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

exports.countLocation = async (req, res, next) => {
  try {
    const countLocationAllModule = await db.Form.findAll({ group: ['LocationId'], attributes: ['LocationId', [sequelize.fn('COUNT', 'LocationId'), 'LocationCount']] })
    const countAllLocationModule1 = await db.Form.findAll({ where: { moduleType: '1' }, group: ['LocationId'], attributes: ['LocationId', [sequelize.fn('COUNT', 'LocationId'), 'LocationCount']] })
    const countAllLocationModule2 = await db.Form.findAll({ where: { moduleType: '2' }, group: ['LocationId'], attributes: ['LocationId', [sequelize.fn('COUNT', 'LocationId'), 'LocationCount']] })
    const countAllLocationModule3 = await db.Form.findAll({ where: { moduleType: '3' }, group: ['LocationId'], attributes: ['LocationId', [sequelize.fn('COUNT', 'LocationId'), 'LocationCount']] })

    res.status(200).send({
      totalLocationAllModule: countLocationAllModule,
      countLocationByModule: {
        module1: countAllLocationModule1,
        module2: countAllLocationModule2,
        module3: countAllLocationModule3
      }
    })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}