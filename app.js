const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("JJ: listening on working directory: " + process.env.PWD);
    console.log("JJ: dirname is: " + __dirname);
    console.log("JJ: path is: ");
    console.log(path);
});