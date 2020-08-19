'use strict'
const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json()); //this steps in front of all request and inspects it for a body.
//and parses it as needed and include it on the request

//GLOW BALL MID ALE WARE
const fruitRouter = require('.routes.js');

app.use(express.json());

app.use(fruitRouter);







module.exports = {
    start: port =>{
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () =>{
            console.log(`listening on  ${PORT}`)
        })
    }
}