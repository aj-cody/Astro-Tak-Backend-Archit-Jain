var mongoose = require("mongoose");

// horoscope SCHEMA SETUP
var horoscopeSchema = new mongoose.Schema({
    name: String,
    date: String,
    img: String,
    urlSlug:String
});

module.exports = mongoose.model("Horoscope", horoscopeSchema);