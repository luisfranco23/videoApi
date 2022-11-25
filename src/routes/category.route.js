const {Router } = require('express')
const { createCategory, deleteCategory } = require('../controllers/category.controller')

const router = Router()

router.post('/', createCategory)
router.delete('/:id', deleteCategory)

module.exports = router