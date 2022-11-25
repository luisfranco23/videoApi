const { category } = require("../services/category.services")

module.exports = {
    createCategory: async (req, res, next) => {
        try {
            const { name } = req.body
            const result = await category.create(name)
            res.status(201).json({ message: "Category create succesfully", result })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    deleteCategory: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await category.delete(id)
            if (result) {
                res.status(200).json({ message: "Category deleted succesfully" })
            } else {
                res.status(400).json({ message: "Category is not exist" })
            }
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}