const express = require('express');

const app = express();

const port = 5000;

const staticFiles = express.static;


app.use(staticFiles('public'));







app.listen(port, () =>{
    console.log("server up")

});
