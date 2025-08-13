const users = require("../model/userModel");
const jwt = require('jsonwebtoken')


//controller to register a user with name , email , password
exports.registerController = async(req , res)=>{

    const { name , email , password } = req.body
    console.log(name , email , password);


    try {

        const existingUser = await users.findOne({email})

        if(existingUser){
            res.status(406).json('User Already Exist')
        }
        else{

            //add new user
            const newUser = new users( {
                name , 
                email ,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}


//controller to login a user
exports.loginController = async(req , res)=>{

    const {email , password} = req.body
    console.log(email , password);


    try {

        const existingUser = await users.findOne({email})

        if(existingUser){

            if(existingUser.password == password){

                //jwt token generation for logined user
                const token = jwt.sign( {userMail:existingUser.email} , process.env.JWTSECRETKEY)

                res.status(200).json({existingUser , token})

            }
            else{
                res.status(403).json('Invalid Credentials')
            }

        }
        else{
            res.status(404).json('User Does not exist , Please Register')
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}