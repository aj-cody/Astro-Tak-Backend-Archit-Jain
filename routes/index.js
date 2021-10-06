var express = require("express"),
    router = express.Router(),

    Askq = require("../models/askq"),
    Astrologer = require("../models/astrologer"),
    Banners = require("../models/banners"),
    Feedback = require("../models/feedback"),
    Horoscope = require("../models/horoscope"),
    Reports = require("../models/reports"),

    AskqArray = require("../sampleData/askq"),
    AstrologerArray = require("../sampleData/astrologer"),
    BannersArray = require("../sampleData/banners"),
    FeedbackArray = require("../sampleData/feedback"),
    HoroscopeArray = require("../sampleData/horoscope"),
    ReportsArray = require("../sampleData/reports");

router.get("/", function (req, res) {
    // Get all askq from DB

    var dataArray = new Array();

    Askq.deleteMany({}, function(err){
        if(err) {
            console.log(err);
        } else {
            Askq.insertMany(AskqArray, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    // res.send({
                    //     message: "Askq Updated"
                    // })
                    Askq.find({}, function (err, allAskq) {
                        if (err || !allAskq) {
                            res.redirect("back");
                            console.log(err);
                        } else {
                            // res.send({
                            //         askq: allAskq,
                            //         message: "Askq Updated"
                            //     });
                            dataArray.push(allAskq);
                        }
                    })
                }
            });
        }
    });

    Astrologer.deleteMany({}, function(err){
        if(err) {
            console.log(err);
        } else {
            Astrologer.insertMany(AstrologerArray, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    Astrologer.find({}, function (err, allAstrologer) {
                        if (err || !allAstrologer) {
                            res.redirect("back");
                            console.log(err);
                        } else {
                            // res.send({
                            //         astrologer: allAstrologer,
                            //     });
                            
                            dataArray.push(allAstrologer);
                        }
                    })
                }
            });
        }
    });

    Banners.deleteMany({}, function(err){
        if(err) {
            console.log(err);
        } else {
            Banners.insertMany(BannersArray, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    Banners.find({}, function (err, allBanners) {
                        if (err || !allBanners) {
                            res.redirect("back");
                            console.log(err);
                        } else {
                            // res.send({
                            //         banners: allBanners,
                            //     });
                            
                            dataArray.push(allBanners);
                        }
                    })
                }
            });
        }
    });

    Feedback.deleteMany({}, function(err){
        if(err) {
            console.log(err);
        } else {
            Feedback.insertMany(FeedbackArray, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    Feedback.find({}, function (err, allFeedback) {
                        if (err || !allFeedback) {
                            res.redirect("back");
                            console.log(err);
                        } else {
                            // res.send({
                            //         feedback: allFeedback,
                            //     });
                            
                            dataArray.push(allFeedback);
                        }
                    })
                }
            });
        }
    });

    Horoscope.deleteMany({}, function(err){
        if(err) {
            console.log(err);
        } else {
            Horoscope.insertMany(HoroscopeArray, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    Horoscope.find({}, function (err, allHoroscope) {
                        if (err || !allHoroscope) {
                            res.redirect("back");
                            console.log(err);
                        } else {
                            // res.send({
                            //         horoscope: allHoroscope,
                            //     });
                            
                            dataArray.push(allHoroscope);
                        }
                    })
                }
            });
        }
    });

    Reports.deleteMany({}, function(err){
        if(err) {
            console.log(err);
        } else {
            Reports.insertMany(ReportsArray, function(err) {
                if(err) {
                    console.log(err);
                } else {
                    Reports.find({}, function (err, allReports) {
                        if (err || !allReports) {
                            res.redirect("back");
                            console.log(err);
                        } else {
                            dataArray.push(allReports);
                            res.send({
                                    data: dataArray,
                                });
                        }
                    })
                }
            });
        }
    });
    
    console.log(dataArray);
});

router.get("/talk-to-astrologer", function (req, res) {
    Astrologer.find({}, function (err, allAstrologer) {
        if (err || !allAstrologer) {
            res.redirect("back");
            console.log(err);
        } else {
            res.send({
                astrologer: allAstrologer,
            });
        }
    })
})

// var searchString = 'vastu';

// router.get("/talk-to-astrologer/search", function (req, res) {
// Astrologer.find({$text: {$search: searchString}}, function(err, srch){
//         res.send ({
//             srch: srch
//         })
//     })
// })

module.exports = router;