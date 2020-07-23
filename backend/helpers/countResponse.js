const db = require('../models')
const chalk = require('chalk');
const { Op } = require('sequelize');

exports.countResponseByDay = async () => {
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

    const countResponseADayByModule1 = await db.Form.count({ where: { moduleType: '1', dateCreated: { [Op.between]: [startDateADay, endDateADay] } } })
    const countResponseADayByModule2 = await db.Form.count({ where: { moduleType: '2', dateCreated: { [Op.between]: [startDateADay, endDateADay] } } })
    const countResponseADayByModule3 = await db.Form.count({ where: { moduleType: '3', dateCreated: { [Op.between]: [startDateADay, endDateADay] } } })

    // ================== Total Response for display in dashboard   ===================

    const countResponseAllModule = await db.Form.count({})
    const countResponseADayAllModule = await db.Form.count({ where: { dateCreated: { [Op.between]: [startDateADay, endDateADay] } } })

    // ================== Count A Week   ===================

    function getDateAWeek() {
      let date = new Date();
      let day = date.getDay();
      let getPrevMonday;
      let getNextSunday;
      if (date.getDay == 1) {
        getPrevMonday = new Date(date.getFullYear(), date.getMonth(), date.getDate())
        getNextSunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day + 6)
      } else {
        getPrevMonday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day + 1, 0, 0, 0)
        getNextSunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day + 7, 23, 59, 59)
      }
      return [getPrevMonday, getNextSunday]
    }

    getDateAWeek()
    let [startDateAWeek, endDateAWeek] = getDateAWeek();
    startDateAWeek.setTime(startDateAWeek.getTime() + myTimeZone * 60 * 60 * 1000)
    startDateAWeek.toISOString()

    endDateAWeek.setTime(endDateAWeek.getTime() + myTimeZone * 60 * 60 * 1000)
    endDateAWeek.toISOString()
    // console.log(startDateAWeek, endDateAWeek)

    const countResponseAWeekByModule1 = await db.Form.count({ where: { moduleType: '1', dateCreated: { [Op.between]: [startDateAWeek, endDateAWeek] } } })
    const countResponseAWeekByModule2 = await db.Form.count({ where: { moduleType: '2', dateCreated: { [Op.between]: [startDateAWeek, endDateAWeek] } } })
    const countResponseAWeekByModule3 = await db.Form.count({ where: { moduleType: '3', dateCreated: { [Op.between]: [startDateAWeek, endDateAWeek] } } })

    // ================== Count A Month  ==================
    let startDateAMonth = new Date(date.getFullYear(), date.getMonth(), 1)
    startDateAMonth.setTime(startDateAMonth.getTime() + myTimeZone * 60 * 60 * 1000)
    startDateAMonth.toISOString()


    let endDateAMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    endDateAMonth.setTime(endDateAMonth.getTime() + myTimeZone * 60 * 60 * 1000)
    endDateAMonth.toISOString();

    const countResponseAMonthByModule1 = await db.Form.count({ where: { moduleType: '1', dateCreated: { [Op.between]: [startDateAMonth, endDateAMonth] } } })
    const countResponseAMonthByModule2 = await db.Form.count({ where: { moduleType: '2', dateCreated: { [Op.between]: [startDateAMonth, endDateAMonth] } } })
    const countResponseAMonthByModule3 = await db.Form.count({ where: { moduleType: '3', dateCreated: { [Op.between]: [startDateAMonth, endDateAMonth] } } })

    // ================== Count A Year   ===================
    let startDateAYear = new Date(date.getFullYear(), 0, 1, 0, 0, 0)
    startDateAYear.setTime(startDateAYear.getTime() + myTimeZone * 60 * 60 * 1000)
    startDateAYear.toISOString()

    let endDateAYear = new Date(date.getFullYear(), 11, 31, 23, 59, 59)
    endDateAYear.setTime(endDateAYear.getTime() + myTimeZone * 60 * 60 * 1000)
    endDateAYear.toISOString()

    const countResponseAYearByModule1 = await db.Form.count({ where: { moduleType: '1', dateCreated: { [Op.between]: [startDateAYear, endDateAYear] } } })

    // ================== Count All Time ===================
    const countResponseByModule1 = await db.Form.count({ where: { moduleType: '1' } })
    const countResponseByModule2 = await db.Form.count({ where: { moduleType: '2' } })
    const countResponseByModule3 = await db.Form.count({ where: { moduleType: '3' } })

    return {
      countResponseAllModule,
      countResponseADayAllModule,
      countResponseADayByModule1,
      countResponseADayByModule2,
      countResponseADayByModule3,
      countResponseAWeekByModule1,
      countResponseAWeekByModule2,
      countResponseAWeekByModule3,
      countResponseAMonthByModule1,
      countResponseAMonthByModule2,
      countResponseAMonthByModule3,
    }
  } catch (err) {
    console.log(chalk.bgRed.bold(err))
    throw new Error('Error by countResponseByDay')
  }
} 
