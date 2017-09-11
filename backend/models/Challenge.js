"use strict";
const mongoose = require('mongoose')

let Challenge = {
  name : {type : String, required : true},
  description : {type : String, required : true},

  //only triplogs after the startDate and before the endDate are eligible
  startDate : {type: Date, required : true},
  endDate : {type : Date, required : true},

  //only triplogs with the given mode are eligible
  mode : {type : String, enum : ["bike", "walk", "carpool"]}
}

let ChallengeSchema = new mongoose.Schema(Challenge);

//example of how to do a model method in mongoose
ChallengeSchema.methods.formattedName = function(callback){
  const fullName = this.name + ": A " + this.mode + " challenge.";
  return process.nextTick(() => callback(null, fullName));
}

module.exports = mongoose.model("Challenge", ChallengeSchema);