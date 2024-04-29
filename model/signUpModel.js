const mongoose = require("mongoose");

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
        type: Mixed,
        required: [true, "An email is required."],
        minLength: [2, "The minimum number of characters is two."]

    },

    password: {
        type: Mixed,
        required: [true, "A password is required."],
        minLength: [8, "The minimum number of characters is eight."]

    },

});

const User = mongoose.model("User", signUpSchema);

module.exports = User;