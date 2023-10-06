const express = require('express');
const app = express();
// const bookController = require('./controllers/bookController');
const router = require('./routes/bookRoutes');

const PORT = 3000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
