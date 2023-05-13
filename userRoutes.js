// const asyncHandler=require("express-async-handler")
const express=require("express")
const {registerUser, loginUser, currentUser}=require("../controller/userController")

// const { validate } = require("../models/userModels")
const { validate } = require("../models/num")
// const app=express()
const router=express.Router()
// const validToken=require("../Middleware/validToken")
const validateToken = require("../Middleware/validToken")
// router.use(validateToken)
router.post("/register",registerUser)


router.post("/category/login",loginUser)

router.get("/current",validateToken,currentUser)

module.exports=router