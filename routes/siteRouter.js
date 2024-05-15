//Site Router

// importing express and passport
const express = require("express");
const passport = require("passport");

const { localLoginFailed } = require("../controller/siteCtrl");

//importing express.Router() to handle different requests
const router = express.Router();

//Local login
router.post(
  "/api/login/local",
  passport.authenticate("local", { failureRedirect: "/api/login/failed" }),
  (req, res, next) => {
    res.status(200).json({
      success: { message: "User logged in." },
      data: {
        username: req.user.username,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
      },
      statusCode: 200,
    });
  }
);

//Detect for failed login attempts
router.get("/api/login/failed", localLoginFailed);

// //Detect for logging out
router.get("/api/logout", logOutRequest);

// exporting router
module.exports = router;
