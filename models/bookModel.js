let books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ];

  module.exports = {
    getAllBooks: () => books,
    getBookById: id => books.find(book => book.id === id),
    addBook: book => {
      book.id = books.length + 1;
      books.push(book);
      return book;
    },
    updateBook: (id, updatedBook) => {
      const index = books.findIndex(book => book.id === id);
      if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        return books[index];
      }
      return null;
    },
    deleteBook: id => {
      const index = books.findIndex(book => book.id === id);
      if (index !== -1) {
        return books.splice(index, 1)[0];
      }
      return null;
    },
  };