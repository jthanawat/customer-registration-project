require('dotenv').config()
require('./config/passport/passport')

const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models')
const formRouter = require('./routes/Form')
const authRouter = require('./routes/Auth')
const userRouter = require('./routes/User')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/form', formRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)

app.all('*', (req,res) => {
  res.status(404).send({message: 'route not found'})
})

db.sequelize.sync({force: false}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })
})