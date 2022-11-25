const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Videos = db.define('videos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id'
    }
})

module.exports = {Videos}