const { Signup, Login } = require('../controllers/AuthController')
const {userVerification}=require("../Middlewares/AuthMiddleware")
const router = require('express').Router()
const ProductController =require("../controllers/ProductController.js")
const AuthMiddleware=require("../Middlewares/AuthMiddleware")

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',userVerification)
router.get("/user", userVerification);
router.post("/product/save/:userId/:foodId", AuthMiddleware.isAuthenticated, ProductController.saveFood);
module.exports = router