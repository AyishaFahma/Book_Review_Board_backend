require('dotenv').config()


const express = require('express')

const cors = require('cors')

const routes = require('./routes')

require('./connection')



const bookServer = express()

bookServer.use(cors())

//bulit-in middleware
bookServer.use(express.json())

bookServer.use(routes)

const PORT = 4000 || process.env.PORT

bookServer.listen(PORT , ()=>{
    console.log(`sever running successfully at ${PORT}`);
})