
const jwt = require('jsonwebtoken')


const jwtMiddleware = (req , res , next)=>{

    console.log('inside jwt middleware');

    const token = req.headers["authorization"].slice(7)

    try {

        const jwtResponse = jwt.verify(token , process.env.JWTSECRETKEY)

        console.log(jwtResponse);

        req.payload = jwtResponse.userMail
        console.log(req.payload);

        next()
        
        
        
    } catch (error) {
        res.status(401).json(`Authorization Failed ${error}`)
    }
    
}


module.exports = jwtMiddleware