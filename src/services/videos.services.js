const { Videos } = require("../models/videos.model")


class videos {
    static async createVideos (video) {
        try {
            const result = await Videos.create(video)
            return result
        } catch (error) {
            throw error
        }
    }
    static async deleteVideo (id) {
        try {
            const exist = await Videos.findByPk(id)
            if (exist) {
                const result = await Videos.destroy({
                    where:{
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


module.exports = {videos}