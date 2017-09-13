"use strict";
const express = require("express");
const Challenge = require("../models/Challenge");

let router = new express.Router();

router.get("/:challengeId", function(req, res){
  Challenge.findById(req.params.challengeId, (err, challenge) => {
    if(err) return res.status(500);
    if(!challenge) return res.status(404);
    return res.json(challenge);
  })
})

router.get("/:challengeId/leaderboard", function(req, res){
  //calculate leaderboard stats here...
  const leaderBoard = [{userId : "the winner", miles : 1000 },
                       {userId : "secondPlace", miles : 2}];

  return res.json(leaderBoard);
})

module.exports = router;