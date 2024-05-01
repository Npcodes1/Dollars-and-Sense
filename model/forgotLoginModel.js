//require mongoose
const mongoose = require("mongoose");

//define Schema as a new mongoose Schema
const { Schema } = mongoose;

const resetLoginSchema = new Schema({
    email: {
        type: String,
        required: [true, "An email is required."],
        minLength: [2, "The minimum number of characters is two."],
        unique: true
    },

});

//defining a constant of an constructor object to use mongoose as the middleware for the schema model
const Reset = mongoose.model("Reset", resetLoginSchema);

//exporting the constructor to call in data throughout the app
module.exports = Reset;