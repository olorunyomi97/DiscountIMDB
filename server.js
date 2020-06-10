const express = require('express');
const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;

// connect to mongoDB through mongoose //
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

    
const port = process.env.PORT || 5000;

