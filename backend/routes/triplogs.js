const express = require("express");
const TripLog = require("../models/TripLog");

let router = new express.Router();
router.get("/", function(req, res){
  TripLog.find({}, function(err, allLogs){
    if(err) return res.status(500);
    return res.json(allLogs);
  })
})

router.get("/:tid", function(req, res){
  TripLog.findById(req.params.tid, function(err, log){
    if(err) return res.status(500);
    if(!log) return res.status(404);
    return res.json(log);
  })
})
module.exports = router;