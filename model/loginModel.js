//require mongoose
const mongoose = require("mongoose");

//define Schema as a new mongoose Schema
const { Schema } = mongoose;

const loginSchema = new Schema({
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
const Login = mongoose.model("Login", loginSchema);

//exporting the constructor to call in data throughout the app
module.exports = Login;