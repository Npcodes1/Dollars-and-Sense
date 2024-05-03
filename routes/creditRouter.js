//Credit Score Router

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const creditScore = require("../controller/creditCtrl");

//making a GET route to read credit score page (credit-score.html)
router.get("/api/credit-score", creditScore);

// exporting router
module.exports = router;