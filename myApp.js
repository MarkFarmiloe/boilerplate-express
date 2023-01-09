let express = require('express');
let app = express();
require('dotenv').config()


// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

console.log('hello world');

app.get("/", (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`)
});

app.get("/json", (req, res) => {
    const mySecret = process.env['MESSAGE_STYLE'];
    var response = "Hello json".toUpperCase(); 
    if (mySecret === "uppercase") {
        response = "Hello json".toUpperCase();
      } else {
        response = "Hello json"
      }
      res.json({message: response})
});


 module.exports = app;
