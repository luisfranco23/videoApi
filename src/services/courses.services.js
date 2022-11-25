const { Categories } = require("../models/categories.model")
const { Courses } = require("../models/courses.model")
const { UsersCourses } = require("../models/userscourses.model")
const { Videos } = require("../models/videos.model")

class courses {
    static async addCourseToUser(data) {
        try {
            const result = await UsersCourses.create(data)
            return result
        } catch (error) {
            throw error
        }
    }
    static async getCourses() {
        try {
            const result = await Courses.findAll({
                attributes: {
                    exclude: ['categoryId','createdAt', 'updatedAt']
                },
                order: [['id', 'ASC']],
                include: [{
                    model: Categories,
                    as: 'category',
                    attributes: ['name']
                },{
                    model: Videos,
                    attributes: ['title','url'],
                }],
            })
            return result
        } catch (error) {
            throw error
        }
    }
    static async addNewCourse(course) {
        try {
            const result = await Courses.create(course)
            return result
        } catch (error) {
            throw error
        }
    }
    static async editCourse(id, description) {
        try {
            const result = await Courses.update({description},{
                where: {
                    id
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = { courses }