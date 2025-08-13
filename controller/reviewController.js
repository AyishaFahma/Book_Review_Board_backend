const reviews = require("../model/reviewModel");


//controller to add review
exports.addReviewController = async(req , res)=>{

    const {rating , comment} = req.body

    const {bookId} = req.params
    
    const userMail = req.payload

    console.log(rating , comment , bookId , userMail);
    
    
    try {

        const newReview = new reviews( {
            rating ,
            comment ,
            bookId ,
            userMail
        })
        await newReview.save()
        res.status(200).json(newReview)

        
        
    } catch (error) {
        res.status(500).json(error)
    }
}


//controller to get book review
exports.getBookReviewController = async( req , res)=>{


    const {id} = req.params
    console.log(id);

    try {

        const allreview = await reviews.find({bookId:id})
        res.status(200).json(allreview)
        
    } catch (error) {
       res.status(500).json(error) 
    }
    
}