// Contact Controller

//summon the model template for Get In Touch form
const Send = require("../model/contactModel");

//Contact Page
const contact = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the contact page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Contact score page can't be found." },
      statusCode: 404,
    });
  }
};

// Sending message
const sendMessage = async (req, res, next) => {
  //form inputs that user enters on the form
  const { firstName, lastName, message } = req.body;

  const newMessage = new Send({
    firstName,
    lastName,
    message,
  });

  //checking that the message is saved
  try {
    await newMessage.save();
    res.status(201).json({
      success: { message: "Message successfully sent" },
      data: newMessage,
      statusCode: 201,
    });
  } catch (error) {
    res.status(404).json({
      error: {
        message: "There was a problem sending the message. Please try again",
      },
      statusCode: 404,
    });
  }
};

module.exports = { contact, sendMessage };
