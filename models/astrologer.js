var mongoose = require("mongoose");

// astrologer SCHEMA SETUP
var astrologerSchema = new mongoose.Schema({
    id: Number,
    urlSlug: String,
    namePrefix: String,
    firstName: String,
    lastName: String,
    aboutMe: String,
    profliePicUrl: String,
    experience: Number,
    languages: String,
    minimumCallDuration: Number,
    minimumCallDurationCharges: Number,
    additionalPerMinuteCharges: Number,
    isAvailable: Boolean,
    rating: Number,
    skills: Array,
    isOnCall: Boolean,
    images: String,
    availability: {
       days: Array,
       slot: {
          toFormat: String,
          fromFormat: String,
          from: Number,
          to: Number
       }
    }
});
// astrologerSchema.index({firstName: 'text', lastName: 'text', language: 'text', skills: 'text'});

module.exports = mongoose.model("Astrologer", astrologerSchema);