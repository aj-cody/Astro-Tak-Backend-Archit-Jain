var mongoose = require("mongoose");

// report SCHEMA SETUP
var reportSchema = new mongoose.Schema({
    name: String,
    productCode: String,
    imageUrl: String,
    description: String,
    availableLanguages: String,
    indepthPoints: String,
    price: Number,
    offerPrice: Number
});

module.exports = mongoose.model("Report", reportSchema);