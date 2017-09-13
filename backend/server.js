"use strict";
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO || "mongodb://localhost";

//connect
mongoose.connect(mongoUrl, function(err){
  if(err) console.error("error connecting to mongodb. things might head south");
  else console.log("connected to mongo!");
});

let challengeRoutes = require("./routes/challenges");
let triplogRoutes = require("./routes/triplogs");

let app = express();

//mount at the specified point. so a route in the challenges routes file that
//looks like router.get("/hello") will be available at "/challenges/hello
app.use("/challenges", challengeRoutes);
app.use("/triplogs", triplogRoutes);

//basic route to see if things are working
app.get("/", (req, res) => res.end("Hello World!"));


app.listen(port, () => console.log("listening on port %d", port));