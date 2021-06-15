const express = require("express");
const app = express();
const port = 3000;
// const path = require('path');
// console.log(path.join(__dirname));
// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));
app.get("", (req, res) => {
    res.send("Welcome to Mg word");
}) 
app.get("/about", (req, res) => {
    res.send("Welcome to about word");
}) 
app.get("/wether", (req, res) => {
    res.send("Welcome to wether word");
}) 
app.get("*", (req, res) => {
    res.send("Oops 404 error page");
}) 
app.listen(port, ()=> {
    console.log(`listen to ${port}`);
})