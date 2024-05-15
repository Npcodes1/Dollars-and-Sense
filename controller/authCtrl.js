//import bcrypt
const bcrypt = require("bcrypt");

//import User Model
const User = require("../model/signUpModel");

//import Message Model
const Send = require("../model/contactModel");

//write code to give ability to create, edit, delete login

// SignUp Request- creating a new user
const signUpRequest = async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, username, password } =
    req.body;
  bcrypt.hash(password, 10, async (error, hashedPassword) => {
    if (error) {
      return next(error);
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      username,
      password: hashedPassword,
    });

    try {
      await newUser.save();
      req.login(newUser, (error) => {
        if (error) {
          res.status(400).json({
            error: {
              message:
                "There was a problem while signing up. Please try again!",
            },
            statusCode: 400,
          });
        }
      });

      res.status(201).json({
        success: { message: "New user has been created." },
        data: { firstName, lastName, email, phoneNumber, username },
        statusCode: 201,
      });

      //to catch attempts on creating duplicate accounts with same username
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.username) {
        res.status(400).json({
          error: {
            message: "Username already exists. Please enter another username.",
          },
          statusCode: 400,
        });
      } else {
        res.status(500).json({
          error: { message: "Internal server error." },
          statusCode: 500,
        });
      }
    }
  });
};

//Admin access to get all users
const getAllUsers = async (req, res, next) => {
  await User.find({}).then((users) =>
    res.status(200).json({
      success: { message: "Reference the users and list all of them." },
      data: users,
      statusCode: 200,
    })
  );
}; ///*signUpData was previous data*/

//get single user -not working
const getUser = async (req, res, next) => {
  const { _id } = req.params;
  await User.findOne({ _id: _id }).then((user) => {
    res.status(200).json({
      success: { message: "A single user was successfully selected" },
      data: user,
      statusCode: 200,
    });
  });
};

//forgot-login
const forgotLogin = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the forgot login page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Forgot login page can't be found." },
      statusCode: 404,
    });
  }
};

// getAllMessages
const getAllMessages = async (req, res, next) => {
  try {
    await Send.find({}).then((sends) =>
      res.status(200).json({
        success: {
          message:
            "Reference the messages from the contact form and list all of them.",
        },
        data: sends,
        statusCode: 200,
      })
    );
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong getting all the messages!" },
    });
  }
};

//get one message -not working
const getMessage = async (req, res, next) => {
  const { _id } = req.params;
  Send.findOne({ _id: _id }).then((message) => {
    res.status(200).json({
      success: { message: "A single user was successfully selected" },
      data: message,
      Send,
      statusCode: 200,
    });
  });
};

const admin = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the admin page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Admin page can't be found." },
      statusCode: 404,
    });
  }
};

module.exports = {
  signUpRequest,
  getAllUsers,
  getUser,
  forgotLogin,
  getAllMessages,
  getMessage,
  admin,
};
