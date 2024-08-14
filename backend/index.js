import express from "express";
import {PORT, mongodbDB} from './config.js';
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();


app.use(express.json());

//create our first Http Route

app.get('/', (req, res) => {
    console.log(res);
    return res.status(234).send('Welcome to MERN Stak Tutorial');
    });

//Middleware for handling cors policy
//option 1. allow all origins with default of cors(*)
app.use(cors());
//option 2: allow custom origins
// app.use(
//    cors({
//          origin:'http://localhost:3000',
//       method:['GET','POST','PUT', 'DELETE'],
//    allowedHeaders:['Content-Type'],
//   })
//  )
   
//connect to the server and mongoose in database
app.use('/books', booksRoute);

mongoose
.connect(mongodbDB)
.then(() => {
  console.log('App connected to database');
  app.listen(PORT , () => {
 console.log(`Server is running on port ${PORT}`);
})

}).catch((error) => {
    console.log(error);
})



