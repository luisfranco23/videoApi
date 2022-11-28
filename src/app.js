const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const initModels = require('./models/initModels');
const routes = require('./routes');
const { db } = require('./utils/database');
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/v1',routes)

initModels()

db.authenticate()
    .then(() => console.log('Auth succes!'))
    .catch(err => console.log(err))

db.sync({force: false})
    .then(() => console.log('db sycn succes!!'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})
