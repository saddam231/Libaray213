
import express from 'express';
import {Books} from '../models/bookModel.js'

const router = express.Router();

    router.post('/', async (req, res) => {
        try{
            if(!req.body.booksname || !req.body.author || !req.body.publishYear){
                return res.status(400).send({message: 'All fields are required'});
            }
            const newBook = {
                booksname: req.body.booksname,
                author: req.body.author,
                publishYear: req.body.publishYear
            };

            const book = await Books.create(newBook);
            return res.status(201).json(book);

        }catch (error) {
            console.log(error);
            res.status(500).send({message: error.message});
        }

        })
    router.get('/', async (req, res) => {
        try {
            const books = await Books.find();
            return res.status(200).json({
                count: books.length,
                data: books

            });

        }catch(error) {
            console.log(error);
            res.status(500).send({message: error.message});
        }
        });
     router.get('/:id', async (req, res) => {
            try {

                const {id} = req.params;
                const book = await Books.findById(id);
                return res.status(200).json(book);
    
            }catch(error) {
                console.log(error);
                res.status(500).send({message: error.message});
            }
            });
   
            //update a book by id with mongoose

    router.put('/:id', async (req, res) => {
            try {
                   if(!req.body.booksname || !req.body.author || !req.body.publishYear){
                            return res.status(400).send({message: 'All fields are required'});
                        }

                        const {id} = req.params;
                        const updatedBook = await Books.findByIdAndUpdate(id, req.body);
                        if(!updatedBook){
                            return res.status(404).send({message: 'Book not found'});
                        }
                        return res.status(200).send({message: 'Book updated successfully'});
                    
                    }catch(error){
                        console.log(error);
                        res.status(500).send({message: error.message});
                    

                    }
                });

            //delete a book with mongoose

        router.delete('/:id', async (req, res) => {
                try{
                    const {id} = req.params;
                    const result = await Books.findByIdAndDelete(id);
                    if(!result){
                        return res.status(404).json({message:'Book not found'});

                    }
                     return res.status(200).send({message:'Book deleted successfully'});

                }catch(error) {
                    console.log(error.message);
                    res.status(500).send({message: error.message});

                }
            })

    
export default router;
