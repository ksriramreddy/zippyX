import userModel from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
export async function registerUserController(req,res) {
    try {
        const {username, password, email} = req.body
        if(!name , password , email) {
            return res.json({
                message : "All fields are required",
                error : true,
                success : false
            })
        }
        const user = await userModel.findOne({email})
        if(user){
            return res.json({
                message : "Email already registered",
                error : true,
                success : false
            })
        }
        const salt = await bcryptjs.genSalt()
        const hashedPassword = await bcryptjs.hash(password,salt)
        const payload = {
            name,
            email,
            password : hashedPassword
        }
        const newUser = new userModel(payload)
        const save = await newUser.save()
    } catch (error) {
        return res.json({
            message : "Error registering user",
            error : error.message || error ,
            error : true,
            success : false
        })
    }
}