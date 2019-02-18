//expressjs.com - poveke informacii za express

const express = require("express");
const app = express();
const path = require("path");


app.use(express.static(path.join(__dirname, 'app')));

app.listen(3001, () => console.log("example listen on port 3000"));