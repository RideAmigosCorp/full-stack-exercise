"use strict";
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO || "mongodb://localhost";

//connect
mongoose.connect(mongoUrl, function(err){
  if(err) console.error("error connecting to mongodb. things might head south");
  else console.log("connected to mongo!");
});

let challengeRoutes = require("./routes/challenges");
let triplogRoutes = require("./routes/triplogs");
let staticFiles = path.resolve('./../frontend/');
let dependencies = path.resolve('./../node_modules/');

let app = express();

//serve frontend files from specified directories
app.use(express.static(dependencies));
app.use(express.static(staticFiles));

//mount at the specified point. so a route in the challenges routes file that
//looks like router.get("/hello") will be available at "/api/challenges/hello
app.use("/api/challenges", challengeRoutes);
app.use("/api/triplogs", triplogRoutes);

//basic route to see if things are working
app.get("/api/hello", (req, res) => res.end("Hello World!"));


app.listen(port, () => console.log("listening on port %d", port));
