//import User from Signup Model
const User = require("../model/signUpModel");


const userSample = new User ({
    firstName: "Eliza",

    lastName: "Thornberry",

    email: "eliza.thornberry@gmail.com",

    phoneNumber: 555-55-5555,

    username: "wildThornberry",

    password: hashedPassword //is this right?

});

module.exports = userSample;