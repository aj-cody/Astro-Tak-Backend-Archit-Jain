var mongoose = require("mongoose");

// askq SCHEMA SETUP
var askqSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    price: Number,
    suggestions: Array
});

module.exports = mongoose.model("Askq", askqSchema);