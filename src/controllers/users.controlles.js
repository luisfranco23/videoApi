const { responseAuto } = require("../middleware/response.middleware")
const { users } = require("../services/users.services")


module.exports = {
    getUser: async (req, res) => {
        try {
            const { id } = req.params
            const result = await users.getById(id)
            if (result != undefined || null) {
                res.status(200).json({ length: result?.length, result })
            }
            res.status(200).json({ message: 'Username does not exist' })
        } catch (error) {
            res.status(400).json(error.message)
        }
    },
    getWithCourses: async (req, res) => {
        try {
            const result = await users.getUserWhithCourses(req.params.id)
            if (result != undefined || null) {
                res.status(200).json(result)
            }
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
    ,
    postUser: async (req, res, next) => {
        try {
            const result = await users.newUser(req.body)
            res.status(201).json({ message: "User created successfully", result })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    editUser: async (req, res, next) => {
        try {
            const id = req.params.id
            const {firstName, lastName, password} = req.body
            await users.updatedUser({firstName, lastName, password, id})
            res.status(200).json({ message: "User updated successfully" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}
