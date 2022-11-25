const {Router} = require('express')
const { getUser, postUser, getWithCourses, editUser } = require('../controllers/users.controlles')

const router = Router()

router.post('/', postUser)
router.get('/:id/courses', getWithCourses)

router.route('/:id')
    .get(getUser)
    .put(editUser)


module.exports = router