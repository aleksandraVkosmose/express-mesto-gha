const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());
app.use((request, response, next) => {
  request.user = {
    _id: '645ccfe771d2ce3c6993fab1',
  };
  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Приложение запущено в порте ${PORT}`);
});
