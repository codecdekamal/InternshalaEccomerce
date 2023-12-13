const User = require("../models/User");
const {StatusCodes} = require("http-status-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const register = async(req,res) =>{
    try {
        const {name,username,email,password} = req.body;
        console.log(req.body)
        if(!name ||!username || !email ||!password){
          return  res.status(StatusCodes.BAD_REQUEST).json({msg:"Bad request"})
        }
      const user = await User.create({...req.body})
      return res.status(StatusCodes.CREATED).json({data:user})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:error.message})
        console.log(error.message)
    }
}
const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        console.log(req.body)
        if(!email || !password){
           return res.status(StatusCodes.UNAUTHORIZED).json({msg:"Please provide all credentials"})
        }
        const user = await User.findOne({email})
        console.log(user)
        const hashPassword = user.password
        const checkingPassword = await bcrypt.compare(password,hashPassword)
        console.log(checkingPassword)
        if(!checkingPassword){
          return  res.status(StatusCodes.UNAUTHORIZED).json({msg:"You are providing wrong password."})
        }
       const token = jwt.sign({username:user.username,userID:user._id,role:user.role},process.env.MY_SECRET_KEY,{expiresIn:"10d"})
       console.log(user)
        res.status(StatusCodes.OK).json({token,username:user.username,userID:user._id,role:user.role})
    } catch (error) {
      console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:"Internal sever error!"})  
    }
}
module.exports = {register,login}