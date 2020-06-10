var PORT = process.env.PORT || 5500;
const express = require('express');
const mongoose = require('mongoose');

var app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// connect to mongoDB through mongoose //
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

    
const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server running on port ${port}`));