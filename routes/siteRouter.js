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

//Google Login
router.get(
  "/api/login/google",
  passport.authenticate("google", { scope: ["profile"] })
);

//Google Login failed
router.get("/api/login/google/failed"),
  (req, res, next) => {
    res.json({ message: "There is a problem with Google authentication." });
  };

//Google authentication
router.get(
  "/api/auth/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/api/login/failed",
  })
);

// exporting router
module.exports = router;
