const { Categories } = require("../models/categories.model")
const { Courses } = require("../models/courses.model")
const { Users } = require("../models/users.model")
const { UsersCourses } = require("../models/userscourses.model")
const { Videos } = require("../models/videos.model")
const { db } = require("../utils/database")


const users = [{
    firstName: "Luis",
    lastName: "Franco",
    email: "luis05@gmail.com",
    password: "root"
}, {
    firstName: "Andres",
    lastName: "Martinez",
    email: "andres@gmail.com",
    password: "1234"
}, {
    firstName: "Paola",
    lastName: "Franco",
    email: "paola@gmail.com",
    password: "root"
}]

const categories = [{
    name: "programación"
}, {
    name: "Cocina"
}, {
    name: "Carpinteria"
}, {
    name: "Tecnologia"
}]

const courses = [{
    title: "JavaScript desde 0",
    description: "Todo lo que debes saber de JavaScript",
    instructor: "Luis Franco",
    categoryId: 1,
}, {
    title: "Como hacer arroz con pollo",
    description: "Recetas faciles de cocina",
    instructor: "Luis Franco",
    categoryId: 2,
}, {
    title: "¿Cómo hacer una mesa?",
    description: "Aprenderas como hacer una mesa...",
    instructor: "Luis Franco",
    categoryId: 3,
}, {
    title: "Soporte técnico",
    description: "Vas a aprender como brindar soporte técnico",
    instructor: "Luis Franco",
    categoryId: 4,
}]


const videos = [{
    title: "Fundamentos de JavaScript",
    url: "https://example.com/uploands/image.png",
    courseId: 1
},{
    title: "Fundamentos 2 de JavaScript",
    url: "https://example.com/uploands/image.png",
    courseId: 1
},{
    title: "Conociendo tipos de madera",
    url: "https://example.com/uploands/image.png",
    courseId: 2
},{
    title: "Introducción - Ingredientes",
    url: "https://example.com/uploands/image.png",
    courseId: 3
},{
    title: "Paso 2 de la receta",
    url: "https://example.com/uploands/image.png",
    courseId: 3
},{
    title: "Conociendo componentes de un Pc",
    url: "https://example.com/uploands/image.png",
    courseId: 4
},{
    title: "Fundamentos de JavaScript",
    url: "https://example.com/uploands/image.png",
    courseId: 4
}]

const userCourses = [{
    userId : 1,
    courseId : 1 
},{
    userId : 1,
    courseId : 2 
},{
    userId : 2,
    courseId : 1 
},{
    userId : 3,
    courseId : 4 
},{
    userId : 2,
    courseId : 3 
}]


db.sync({force: true}).then(async () => {
    console.log('Todo va ok')
    users.forEach(user => Users.create(user))

    setTimeout(() => {
        categories.forEach(category => Categories.create(category))
    },100)

    setTimeout(() => {
        courses.forEach(course => Courses.create(course))
    },200)

    setTimeout(() => {
        videos.forEach(video => Videos.create(video))
    },300)

    setTimeout(() => {
        userCourses.forEach(userCourse => UsersCourses.create(userCourse))
    },400)
})
