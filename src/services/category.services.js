const { Categories } = require("../models/categories.model")

class category {
    static async create(name) {
        try {
            const result = await Categories.create({name})
            return result
        } catch (error) {
            throw error
        }
    }
    static async delete(id) {
        try {
            const exist = await Categories.findByPk(id)
            if (exist) {
                const result = await Categories.destroy({
                    where: {
                        id
                    }
                })
                return result
            }
            return false
        } catch (error) {
            throw error
        }
    }
}

module.exports = {category}