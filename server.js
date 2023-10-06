const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// const router = require('./routes/bookRoutes');
const router = require('./routes/brandRoutes');
const PORT = 3002;
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Pavankumar:<password>@cluster0.bqnmxzk.mongodb.net/?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(()=> console.log("DB connected..")).catch(err => console.log(err)) // replace <password> -> password


app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
