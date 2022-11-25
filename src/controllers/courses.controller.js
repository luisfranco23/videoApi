const { courses } = require("../services/courses.services")

module.exports = {
    addCourse: async(req, res, next) => {
        try {
            const {userId} = req.params
            const {courseId} = req.body
            const result = await courses.addCourseToUser({userId,courseId})
            res.status(201).json({ message: "Course add successfully", result })
        } catch (error) {
            res.status(400).json(error.message)
        }
    },
    getAllCourses: async(req, res, next) => {
        try {
            const result = await courses.getCourses()
            res.status(200).json({ message: "Successful status", body: result })
        } catch (error) {
            res.status(400).json(error.message)
        }
    },
    addNewCourse: async(req,res, next) => {
        try {
            const course = req.body
            const result = await courses.addNewCourse(course)
            res.status(201).json({ message: "Course created successfully", result })
        } catch (error) {
            res.status(400).json(error.message)
        }
    },
    editCourse: async(req, res, next) => {
        try {
            const {id} = req.params
            const {description} = req.body
            await courses.editCourse(id, description)
            res.status(201).json({ message: "Course updated successfully"})
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}