var mongoose = require("mongoose");

// banner SCHEMA SETUP
var bannerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    landingUrl:String,
    orderType: String,
    imageUrl:String
});

module.exports = mongoose.model("Banner", bannerSchema);