const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
// email vaildation using Validate package
const validator  = require("validator");
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide name"]
    },
    email:{
        type:String,
        unique:true,
        validate:{
           validator:validator.isEmail,
           message:"Pleae provide email"
        },
        required:[true,"Please provide name"]
    },
    password:{
        type:String,
        required:[true,"Please provide name"]
    },
    username:{
        type:String,
        required:[true,"Please provide name"],
        unique:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
},{
    timestamps:true
})
UserSchema.pre('save',async function (next){
    const salt = await bcrypt.genSalt(10);
    this.password =  bcrypt.hash(this.password,salt)
    next()
})
module.exports = mongoose.model("User",UserSchema)