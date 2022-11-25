const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");
const { Users } = require("./users.model");

const UsersCourses = db.define("users_courses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users
        },
        field: "user_id",
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
    }
},{
    timestamps: false
})

module.exports = {UsersCourses}