//Financial Tracker Router

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {financialTracker, createEntry, updateEntry, deleteEntry} = require("../controller/trackerCtrl");

//Financial Tracker
//Goal is that user can edit the financial tracker inputs to add/edit/remove entries

//making GET route to read financial tracker page (financial-tracker.html)
router.get("/api/financial-tracker", financialTracker);

//to create new entry
router.post("/api/financial-tracker/create", createEntry);

//to update entry
router.put("/api/financial-tracker/edit", updateEntry);

//to delete entry
router.delete("/api/financial-tracker/delete", deleteEntry);

// exporting router
module.exports = router;