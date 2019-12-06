const express = require("express");
// const morgan = require("morgan");
const path = require("path");
// const dotenv = require("dotenv");

const app = express();  

// dotenv.config();

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// Setup logger
// app.use(
//   morgan(
//     ":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :stat" +
//       "us :res[content-length] :response-time ms"
//   )
// );

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
    // res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
    res.send('hello'); // for test
});

module.exports = app;
