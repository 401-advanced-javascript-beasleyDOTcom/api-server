'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
// const router = express.Router();


require('dotenv').config();
const timeStamp = require('./middleware/timestamp.js')
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const logRequest = require('./middleware/logger.js');
const getBrowser = require('./middleware/getBrowser.js');
const productRoutes = require('./models/routes/product.js');
const categoriesRoutes = require('./models/routes/categories.js');
const apiRouter = require('./models/routes/api-v1');

//GLOW BALL MID ALE WARE
app.use(express.json()); //this steps in front of all request and inspects it for a body.
//and parses it as needed and include it on the request
app.use(cors());

// app.use(logRequest);//register the middleware
// router.use(getBrowser);
// app.use(timeStamp);
// app.use(logRequest)
// app.use(router)
// app.use(productRoutes);
// app.use(categoriesRoutes);

app.use('/api/v1', apiRouter);

app.use(errorHandler);
app.use(notFoundHandler);





module.exports = {
    server:app,
    start: port =>{
        const PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () =>{
            console.log(`listening on  ${PORT}`)
        })
    }
}