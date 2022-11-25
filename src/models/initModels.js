const { Categories } = require("./categories.model");
const { Courses } = require("./courses.model");
const { Users } = require("./users.model");
const { UsersCourses } = require("./userscourses.model");
const { Videos } = require("./videos.model");

const initModels = () => {
    Users.belongsToMany(Courses,{through: UsersCourses})
    Courses.belongsToMany(Users, {through: UsersCourses})

    Categories.hasMany(Courses)
    Courses.belongsTo(Categories)

    Courses.hasMany(Videos)
    Videos.belongsTo(Courses)

}

module.exports =  initModels