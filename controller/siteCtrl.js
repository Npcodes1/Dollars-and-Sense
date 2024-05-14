//import bcrypt
const bcrypt = require("bcrypt");

//summon the mock database file for form inputs
const messageData = require("../data/messageData");

//summon the mock database file for users
const signUpData = require("../data/signUpData");

//import User Model
const User = require("../model/signUpModel");

//import Message Model
const Send = require("../model/contactModel");

//login
const login = async (req, res, next) => {
    try {
        await res.status(200).json({ success: { message: "This is the login page" }, statusCode: 200 });
        
    } catch (error) {
        res.status(404).json({ error: { message: "Login page can't be found." }, statusCode: 404 });
    }
};

//Local login
const localLogin = async (req, res, next) => {
    try {
        await res.status(200).json({ success: { message: "User logged in." }, statusCode: 200 });
        
    } catch (error) {
        res.status(404).json({ error: { message: "User couldn't be logged in." }, statusCode: 404 });
    }
};

//Login Failed
const loginFailed = async (req, res, next) => {
    res.status(401).json({ success: { error: "User or password was incorrect. Please try again." }, statusCode: 401 });  
};

// //Logout request -not working
// const logOutRequest = async (req, res, next) => {
//   req.logout((error) => {
//     if (error) {
//         res.status(400).json({ error: { message: "There was a problem logging out." }, statusCode: 400 });            
//     } res.status(200).json({ success: { message: "User successfully logged out." }, statusCode: 200 });
//     });
// };