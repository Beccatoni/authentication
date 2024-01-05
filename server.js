require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const colors = require('colors');
const allRoutes = require('./routes/index.js');


app.use(express.json());

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then( () => {
        console.log(`>>>Listening on pORT ${process.env.PORT}`);
    })
    .catch(err => console.log(">>> Couldn't connect to the database...😢😢"));
})

app.use('/api/expauth/v1/', allRoutes);