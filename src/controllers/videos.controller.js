const { videos } = require("../services/videos.services")


module.exports = {
    create: async (req, res, next) => {
        try {
            const video = req.body
            const result = await videos.createVideos(video)
            res.status(201).json({ message: "Video create successfully", result })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
    deleteById: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await videos.deleteVideo(id)
            if (result) {
                res.status(201).json({ message: "Video deleted successfully" })
            } else {
                res.status(201).json({ message: "Not exist video" })
            }
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}