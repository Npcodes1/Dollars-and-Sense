// Contact Router

//importing express
const express = require("express");

//import handler Functions from the controller directory
const { contact, sendMessage } = require("../controller/contactCtrl");

//importing express.Router() to handle different requests
const router = express.Router();

//making a GET route to read contact page (contact.html)
router.get("/api/contact", contact);

//Use contact form to send message
router.post("/api/send", sendMessage);

// exporting router
module.exports = router;
