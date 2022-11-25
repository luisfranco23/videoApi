const { Categories } = require("../models/categories.model")
const { Courses } = require("../models/courses.model")
const { Users } = require("../models/users.model")


class users {
    static async getById(id) {
        try {
            const result = await Users.findOne({
                where: {
                    id
                }, attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    static async getUserWhithCourses(id) {
        try {
            const result = await Users.findAll({
                where: {
                    id
                },
                attributes: {
                    exclude: ['password','createdAt','updatedAt']
                },
                include: {
                    model: Courses,
                    as: 'courses',
                    attributes: {
                        exclude: ['categoryId','createdAt','updatedAt']
                    },
                    include:{
                        model: Categories,
                        as: "category",
                        attributes: {
                            exclude: ['createdAt','updatedAt'],
                        }
                    },
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    static async newUser(user) {
        try {
            const result = await Users.create(user)
            return result
        } catch (error) {
            throw error
        }
    }
    static async updatedUser(user) {
        try {
            const result = await Users.update(user,{where: {
                id: user.id
            }})
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = { users }