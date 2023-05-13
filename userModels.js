const mongoose = require('mongoose');
const validator = require('validator');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add the user name"],
    },
    email:{
        type:String,
        required:[true,"please add the email address"],
        unique:[true,"email asdd"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid")
            }
        }
    },
    password:{
        type:String,
        required:[true,"please the user password"],
        
    },
},
    {
        timestamps:true,
    }
    
)
// const Expense = mongoose.model('User', userSchema);
module.exports=mongoose.model("User",userSchema)
// module.exports = Expense;