const bookModel = require('../models/bookModel');

const getAllBooks = (req, res) => {
  const books = bookModel.getAllBooks();
  res.json(books);
};

const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = bookModel.getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

const addBook = (req, res) => {
  const newBook = req.body;
  const book = bookModel.addBook(newBook);
  res.status(201).json(book);
};

const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  const book = bookModel.updateBook(id, updatedBook);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedBook = bookModel.deleteBook(id);
  if (deletedBook) {
    res.json(deletedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
