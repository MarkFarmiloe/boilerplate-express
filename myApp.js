let express = require('express');
let app = express();
require('dotenv').config();

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

console.log('hello world');

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello World".toUpperCase();
      } else {
        response = "Hello World";
      }
    res.json({message: response})

})


































 module.exports = app;
