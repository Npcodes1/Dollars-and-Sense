// Contact Controller

//summon the model template for Get In Touch form
const Send = require("../model/contactModel");

//Contact Page
const contact = async (req, res, next) => {
        Send.find().then((send) =>
        res.status(200).json({ success: { message: "This is the contact page" }, data: send, statusCode: 200 }));
};

// Sending message
const sendMessage = async (req, res, next) => {
    //form inputs that user enters on the form
    const { firstName, lastName, message } = req.body;

    const newMessage = new Send({
        firstName: firstName,
        lastName: lastName,
        message: message
    });

    await sendMessage.save();

    //checking that the message is saved
    try {
        res.status(201).json({ success: { message: "Message successfully sent" }, data: newMessage, statusCode: 201 });
        
    } catch (error) {
        res.status(404).json({ error: { message: "There was a problem sending the message. Please try again" }, statusCode: 404 });
    }
};

module.exports = { contact, sendMessage };