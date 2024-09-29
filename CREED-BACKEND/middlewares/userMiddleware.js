import { User } from "../model/userModel";

const jwt  =require("jsonwebtoken")

export const requireSignIn = async(req,res)=>{
    try {
        const decode  =jwt.verify(req.headers.authorization,process.env.JWT_KEY)
        req.user = decode; 
        next();
    } catch (error) {
        return res.status(500).send({
            success:false,
            error,
            message:"Error in Signin Middleware"
        })
    }
} 

export const isAdmin = async(req,res)=>{
    try {
        const user  = await User.findById(req.user._id);
        if(!user.role!==1){
            return res.status(401).send({
                success:false,
                message:"Unathorized Access"
            })
        }else{
            next();
        }
    } catch (error) {
        return res.status(500).send({
            success:false,
            error,
            message:"Error in Admin Middleware"
        })
    }
}