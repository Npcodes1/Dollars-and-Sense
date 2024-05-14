//add routes for login, logout, login/local, login/failed...
//Profile (for signup/login form)
//making a GET route to read Profile page (login.html)
router.get("/api/auth/login", login);

//Detect if user logged in
router.get("/api/auth/login/local", localLogin);

//Detect for failed login attempts
router.get("/api/auth/login/failed", loginFailed);

// //Detect for logging out
// router.get("/api/auth/logout", logOutRequest);

// exporting router
module.exports = router;