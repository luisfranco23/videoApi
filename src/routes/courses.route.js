const {Router} = require('express')
const { addCourse, getAllCourses, addNewCourse, editCourse } = require('../controllers/courses.controller')

const router = Router()

router.post('/:userId', addCourse)
router.route('/')
    .get(getAllCourses)
    .post(addNewCourse)

router.patch('/:id', editCourse)

module.exports = router