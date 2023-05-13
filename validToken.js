const asyncHandler = require('express-async-handler');
const jwt=require("jsonwebtoken")
// const Item = require('../models/userModels');

// const validateToken=asyncHandler(async(req,res,next)=>{
//     try {
//         const token = req.headers.authorization.split(' ,')[1];
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
//         const itemId = decodedToken.itemId;
//         const item = await Item.findById(itemId);
//         if (!item) {
//           return res.status(401).json({ error: 'Invalid Authentication Credentials' });
//         }
//         req.item = { itemId: item._id };
//         next();
//       } catch (err) {
//         console.error(err);
//         res.status(401).json({ error: 'Invalid Authentication Credentials' });
//       }
//     })
// module.exports=validateToken


const validateToken=asyncHandler(async(req,res,next)=>{
  let token;
  let authHeader=req.headers.authorization || req.headers.authorization;
  if(authHeader && authHeader.startsWith("Bearer")){
      token=authHeader.split(" ")[1];
      jwt.verify(token,process.env.ACCESS_TOKEN_SECERT,(err,decoded)=>{
          if(err){
              res.status(401)
              throw new Error("USER IS NOT AUTHROISED")
          }
          // console.log(decoded)
          req.user=decoded.user
          next()
      })
      if(!token){
          res.status(401);
          throw new Error("xfcfhgn")
      }
  }
})
module.exports=validateToken