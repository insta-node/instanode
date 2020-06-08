const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const indexRouter = require('./routes/index');

const hostname = process.env.HOSTNAME || '127.168.0.1';
const port = process.env.PORT || 8080;

dotenv.config();
mongoose.connect('mongodb://localhost:27017/instanode', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
