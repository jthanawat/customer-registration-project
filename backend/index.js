require('dotenv.config(');
require('./config/passport/passport')

const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models')
const formRoute = require('./routes/Form')
const adminRoute = require('./routes/Admin')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/form', formRoute)
app.use('/admin', adminRoute)

db.sequelize.sync().then(() => {
  app.listen(process_env_PORT, () => {
    console.log(`Server is running on port ${process_env_PORT}')
  })
})