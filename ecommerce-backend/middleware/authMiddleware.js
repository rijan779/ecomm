import userModel from "../model/user.js"
import jwt  from "jsonwebtoken";

export const authMiddleware = async (req,res,next)=>{
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Authentication required"
            });
        }

    
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user = await userModel.findById(decoded.userID)
    if(!user){
        return res.status(401).json({
            message:"User not found form token"
        })
    }

    req.user = user

}catch{
    return res.status(401).json({
        message:"invalid or expired"
    })
}
next()
    
}