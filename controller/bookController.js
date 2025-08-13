const books = require("../model/bookModel");


//controller to add a book by logined user
exports.addBookController = async(req , res)=>{

    const { title , author , description , image } = req.body
    console.log(title , author , description , image);

    const userMail = req.payload
    console.log(userMail);
    

    try {

        const existingBook = await books.findOne( {title , userMail:req.payload })

        if(existingBook){
            res.status(401).json('Book Already Added')
        }
        else{

            const newBook = new books( {

                title ,
                author,
                description,
                image,
                userMail:req.payload

            })
            await newBook.save()
            res.status(200).json(newBook)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}



//controller to get all books 
exports.getAllBooksController = async( req , res)=>{

    try {

        const allBooks = await books.find().sort({_id : -1})
        res.status(200).json(allBooks)
        
    } catch (error) {
        res.status(500).json(error)
    }
}


//controller to get a single book
exports.getABookController = async(req , res)=>{

    const {id} = req.params
    console.log(id);

    try {

        const singleBook = await books.findOne( {_id:id})
        res.status(200).json(singleBook)
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}