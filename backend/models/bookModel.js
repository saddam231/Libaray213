import mongoose from "mongoose";



const bookSchema = mongoose.Schema(
{
   booksname:{
        type: String,
        required: true,
    }, 
    author: {
        type: String,
        required: true,

    },
    publishYear: {
        type: Number,
        required: true,
        
    }, 
},
    {
        timestamps: true,
    }

);
export const Books = mongoose.model('Books', bookSchema);