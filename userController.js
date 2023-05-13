// const Expense = require('../models/Expense');
// const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const User=require("../models/userModels")


// console.log(asyncHandler)
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email ||!password){
        res.status(400);
        throw new Error("ALL FIELS ARE MANDATORY")
    }
    const userAvailable=await User.findOne({email:1});
    if (userAvailable){
        res.status(400);
        throw new Error("User already registered")
    }
    const hashedPassword=await bcrypt.hash(password,10)
    // console.log("hashed Password",hashedPassword);
    const user=await User.create({
        username,
        email,
        password:hashedPassword
    })
    console.log(`user created ${user}`)
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("User data us not valid")
    }
    // res.json({message:"register the user"})
})


const loginUser=asyncHandler(async(req,res)=>{
    const{email,password}=req.body;
    if(!email || !password){
        res.status(400)
        throw new Error ("ALL fields are mandatory")
    }
    const user=await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn:"1m"}
        )
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("email or password")
    }

    // res.json({message:"login the user"})
})

const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"kpfgr"})
  
})
module.exports={registerUser,loginUser,currentUser}