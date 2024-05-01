//require mongoose
const mongoose = require("mongoose");

//define Schema as a new mongoose Schema
const { Schema } = mongoose;

const signUpSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "A first name is required."],
        minLength: [2, "The minimum number of characters is two."]

    },

    lastName: {
        type: String,
        required: [true, "A last name is required."],
        minLength: [2, "The minimum number of characters is two."]
    },

    email: {
        type: String,
        required: [true, "An email is required."],
        minLength: [2, "The minimum number of characters is two."],
        unique: true
    },

    phoneNumber: {
        type: Number,
        required: [true, "A phone number is required."],
        minLength: [10, "The minimum number of digits is 10"],
        unique: true
    },

    username: {
        type: String,
        required: [true, "A username is required."],
        minLength: [8, "The minimum number of characters is eight."],
        unique: true

    },

    password: {
        type: String,
        required: [true, "A password is required."],
        minLength: [8, "The minimum number of characters is eight."],
        unique: true
    },

});

//defining a constant of an constructor object to use mongoose as the middleware for the schema model
const User = mongoose.model("User", signUpSchema);

//exporting the constructor to call in data throughout the app
module.exports = User;