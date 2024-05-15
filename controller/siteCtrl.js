//Site Controller

//Login Failed
const localLoginFailed = (req, res, next) => {
  res.status(401).json({
    success: { error: "User or password is incorrect. Please try again." },
    statusCode: 401,
  });
};

//Logout request -not working
const logOutRequest = (req, res, next) => {
  req.logout((error) => {
    if (error) {
      res.status(400).json({
        error: { message: "There was a problem logging out." },
        statusCode: 400,
      });
    }
    res.status(200).json({
      success: { message: "User successfully logged out." },
      statusCode: 200,
    });
  });
};

module.exports = { localLoginFailed, logOutRequest };
