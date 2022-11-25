const {Router} = require('express')

const routerUsers = require('./users.route')
const routerCourses = require('./courses.route')
const routerVideos = require('./videos.route')
const routerCategory = require('./category.route')

const router = Router()

router.use('/users', routerUsers)
router.use('/courses', routerCourses)
router.use('/videos', routerVideos)
router.use('/category', routerCategory)


module.exports = router