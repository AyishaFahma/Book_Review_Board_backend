

const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema( {

    rating : {
        type:Number,
        required:true
    },
    comment : {
        type:String,
        required:true
    },
    userMail : {
        type : String ,
        required : true
    },
    bookId : {
        type:String,
        required:true
    }

})



const reviews = mongoose.model("reviews" , reviewSchema)
module.exports = reviews