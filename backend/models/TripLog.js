"use strict";
const mongoose = require('mongoose')

let TripLog = {
  userId : {type : mongoose.Schema.ObjectId},
  miles : {type : Number, required: true},
  timestamp : {type : Date, required : true},
  mode : {type : String, enum : ["bike", "walk", "carpool", "drive", "bus"]}
}

let TripLogSchema = new mongoose.Schema(TripLog);

//example of how to do a model method in mongoose
TripLogSchema.methods.humanDescription = function(callback){
  const description = "User " + this.userId + " " + this.mode + "ed on " + this.date;
  return process.nextTick(() => callback(null, description));
}

module.exports = mongoose.model("TripLog", TripLogSchema);