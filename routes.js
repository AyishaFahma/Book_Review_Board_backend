
const express = require('express')

const userController = require('./controller/userController')

const bookController = require('./controller/bookController')

const reviewController = require('./controller/reviewController')

const jwt = require('./middleware/jwtMiddleware')

//create an object for modular router class
const routes = new express.Router()


//path to register a user
routes.post('/register' , userController.registerController)

//path to login a user
routes.post('/login' , userController.loginController)

//path to add a book by logined user
routes.post('/add-book' , jwt , bookController.addBookController)

//path to get all books
routes.get('/view-allBooks' , bookController.getAllBooksController)

//path to view a single book
routes.get('/view-Book/:id' , bookController.getABookController)

//path to add review
routes.post('/add-review' , jwt , reviewController.addReviewController)



module.exports = routes