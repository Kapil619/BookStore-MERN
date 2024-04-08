import express, { request, response } from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";


const app = express();


app.use(express.json());
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('WELCOME Kapil');
})


//CREATING A BOOK
app.post('/books', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: 'All fields are required' });
        }

        const newBook = new Book({
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        });
        const book = await Book.create(newBook);
        return response.status(201).send(book);


    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
})

//GETTING ALL BOOKS
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
})

//GETTING A SINGLE BOOK
app.get('/books/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    }
    catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
})

//UPDATING A BOOK
app.put('/books/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: 'All fields are required' });
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).send({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book updated successfully' });
    }
    catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }

})

//DELETING A BOOK
app.delete('/books/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id);

        if (!result) {
            return response.status(404).send({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book deleted successfully' });
    }
    catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });

    }
});

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`App listening on port :${PORT}`);
    })
}).catch((error) => {
    console.log(error);
})