const express = require("express");
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const ejsLint = require('ejs-lint');

const app = express();

const errorController = require('./controllers/error');

app.set("view engine", "ejs");
app.set("views", "views");

const allroutes = require('./routes/allroutes.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(allroutes);

app.use(errorController.get404);


app.listen(3000, (req, res, next) => {
    console.log("Server started on port 3000");
});