import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userModel from "../model/user.js"

export const authRegister = async (req,res)=>{

    const {firstName,lastName,email,password} = req.body

    const userAlreadyRegistered = await userModel.findOne({
        email:email
    })

    if(userAlreadyRegistered){
        return res.staus(400).json({
            message:"USer already registered!!"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
        firstName,
        lastName,
        email,
        password:hashedPassword
    })

    const token = jwt.sign({
        userID:user._id
    },process.env.JWT_SECRET,{
        expiresIn:"20d"
    })

    res.cookie("token",token)

    res.status(200).json({
        message:"Account creation successfull",
        user:{
            id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            password:user.password
        }
    })
}

export const authLogin = async (req,res)=>{
    const {email,password} = req.body

    const user = await userModel.findOne({
        email
    })

    if (!user) {
        return res.status(404).json({
            message:"Login failed: user not found"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(404).json({
            message:"Login failed with status 404"
        })
    }

    const token = jwt.sign({
        userID:user._id
    },process.env.JWT_SECRET,{
        expiresIn:"20d"
    })

    res.cookie("token",token)

    res.status(200).json({
        message:"Login successfull!",
        user:{
            id:user._id,
            email:user.email,
            password:user.password
        }
    })
  
}
export const getUserData = async (req,res)=>{
        // const token = req.cookies.token
        // const decoded = jwt.verify(token)

        // const user = await userModel.findById(decoded._id)  //WE ARE USING AFTER MIDDLEWARE SO JUST DO USER + REQ>UESER

        const user = req.user

        if(!user){
            return res.status(404).json({
                message:"Failed to get user data from getUSerata controller"
            })
        }

        res.status(200).json({
            message:"user fetched success.",
            user
        })
    }