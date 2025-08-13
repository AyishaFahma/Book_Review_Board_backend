//to connect server with db
const mongoose = require('mongoose')


const connectionstring = process.env.DATABASE

mongoose.connect(connectionstring).then( ()=>{
    console.log(`mongodb connected successfully`);
    
}).catch( (error)=>{
    console.log(`mongodb connection failed due to error ${error}`);
    
})