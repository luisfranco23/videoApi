const { Sequelize } = require("sequelize");
require('dotenv').config()
module.exports = {
    db: new Sequelize({
        database: process.env.DATABASE,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false
    })
}