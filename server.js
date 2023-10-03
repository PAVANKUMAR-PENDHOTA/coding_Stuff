const express = require('express');
const app = express();
// const bookController = require('./controllers/bookController');
const router = require('./routes/bookRoutes');

const PORT = 3000;

app.use(express.json());

// Routes
// app.get('/books', bookController.getAllBooks);
// app.get('/books/:id', bookController.getBookById);
// app.post('/books', bookController.addBook);
// app.put('/books/:id', bookController.updateBook);
// app.delete('/books/:id', bookController.deleteBook);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
