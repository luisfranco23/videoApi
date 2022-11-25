const {Router} = require('express')
const { create, deleteById } = require('../controllers/videos.controller')

const router = Router()

router.post('/', create)
router.delete('/:id', deleteById)

module.exports = router