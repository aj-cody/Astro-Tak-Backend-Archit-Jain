const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

// mongodb setup

const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/astro_tak';

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db