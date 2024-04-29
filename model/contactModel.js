const mongoose = require("mongoose");

const { Schema } = mongoose;

const sendMessageSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "A first name is required"],
        minLength: [2, "The minimum number of characters is two"]

    },

    lastName: {
        type: String,
        required: [true, "A last name is required"],
        minLength: [2, "The minimum number of characters is two"]
    },

    message: {
        type: Mixed,
        required: [true, "A message is required"],
        minLength: [2, "The minimum number of characters is two"]
    },

});

const Send = mongoose.model("Send", sendMessageSchema);

module.exports = Send;