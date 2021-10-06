const express = require("express"),
    cors = require("cors"),
    db = require('./db'),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
    app = express();

// importing routes 
// const userRoutes = require('./routes/user'),
//     seatRoutes = require('./routes/seat'),
//     seatMatrixRoutes = require('./routes/seatMatrix');

const allRoutes = require('./routes/index');

// cors option url
var corsOptions = {
  // origin: "https://aj-cody.github.io"
  // for local host
  origin: "http://localhost:3000"
};

app.use(express.static(__dirname))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse cors options
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(methodOverride("_method"));

app.use(require("express-session")({
    secret: "Welcome to the world of astrology!! xD",
    resave: false,
    saveUninitialized: false
}));

// landing page route
app.get("/", (req, res) => {
  console.log("Welcome to AstroTak Astrology.");
  res.send({message: "hello"})
});

//Routes
// app.use("/user-details", userRoutes);
// app.use("/seats-reservation", seatRoutes);
// app.use("/seat-matrix", seatMatrixRoutes);
app.use("/astro-tak", allRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});