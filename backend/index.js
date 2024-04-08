import express, { request, response } from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";


const app = express();

app.use(express.json());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('WELCOME Kapil');
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`App listening on port :${PORT}`);
    })
}).catch((error) => {
    console.log(error);
})