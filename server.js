var PORT = process.env.PORT || 5500;
const express = require('express');
var app = express();


    
const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server running on port ${port}`));