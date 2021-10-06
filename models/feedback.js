var mongoose = require("mongoose");

// feedback SCHEMA SETUP
var feedbackSchema = new mongoose.Schema({
    name: String,
    description: String,
    place: String
});

module.exports = mongoose.model("Feedback", feedbackSchema);