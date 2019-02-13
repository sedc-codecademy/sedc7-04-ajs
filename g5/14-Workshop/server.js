const express = require("express");
const app = express();
const path = require("path");



app.use(express.static(path.join(__dirname, 'app')));

app.listen(3000, () => console.log("example listen on port 3000"))

// http://localhost:3000/ open this url in browser
// express.js for more info about this framework