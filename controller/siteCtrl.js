//siteCtrl contains all the handler (callback) functions to be used for the routes in siteRouter.

//summon the mock database file for Get In Touch form inputs
const messageData = require("../data/messageData");

//homepage (reading data)
const homePage = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the homepage" }, statusCode: 200 });
        }

    } catch (error) {
        res.status(404).json({ error: { message: "Homepage can't be found." }, statusCode: 404 });
    }
};



//Credit Score (reading data)
const creditScore = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the credit score page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Credit score page can't be found." }, statusCode: 404 });
    }
};

//Financial tracker (user can create, read, update, delete data in tracker)
const financialTracker = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the financial tracker page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Financial tracker page can't be found." }, statusCode: 404 });
    }
};

const createEntry = async (req, res, next) => {
    //add what input entries I've decided for financial tracker? Do I need a separate handler function for the form information?

    // const {} = req.body;

    // const newEntry = new ({

    // });

    try {
        
        if (201) {
            await //add .save() to save the entry.
            res.status(200).json({ success: { message: "You've successfully created an entry on the page" }, statusCode: 201 });
        }
        
        
    } catch (error) {
        res.status(404).json({ error: { message: "There was an error. Please try again." }, statusCode: 404 });
    }
};

const updateEntry = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "You've successfully updated an entry on the page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "There was an error. Please try again." }, statusCode: 404 });
    }
};

const deleteEntry = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "You've successfully deleted an entry on the page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "There was an error. Please try again." }, statusCode: 404 });
    }
};

//Resources
const resources = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the resources page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Resources page can't be found." }, statusCode: 404 });
    }
};

//Contact
const contact = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the contact page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Contact page can't be found." }, statusCode: 404 });
    }
};

const sendMessage = async (req, res, next) => {
    const { firstName, lastName, message } = req.body;

    try {
        if (200) {
            await res.status(200).json({ success: { message: "Message successfully sent" }, data: messageData, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "There was a problem sending the message. Please try again" }, statusCode: 404 });
    }
};

//Profile
const profile = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the profile page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Profile page can't be found." }, statusCode: 404 });
    }
};

//Admin access only 
//admin (possible reading, creating, updating and deleting data?)
const admin = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the admin page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Admin page can't be found." }, statusCode: 404 });
    }
};


module.exports = { homePage, creditScore, financialTracker, resources, createEntry, updateEntry, deleteEntry, contact, sendMessage, profile, admin };