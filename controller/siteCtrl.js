//siteCtrl contains all the handler (callback) functions to be used for the routes in siteRouter.

//summon the mock database file for users
const usersData = require("../data/usersData");

//summon the mock database file for form inputs
const formData = require("../data/formData");

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

//admin (possible reading, creating, updating and deleting data?)
const admin = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the admin page" }, data: usersData, formData, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Admin page can't be found." }, statusCode: 404 });
    }
};

//all users
//sending the user data to the admin page?
const allUsers = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "Reference the users and list all of them." }, data: usersData, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Users can't be found. Try again." }, statusCode: 404 });
    }
};

//single user
const getUser = async (req, res, next) => {
    const { _id } = req.params;
    const foundUser = usersData.find(usersData => usersData._id === Number(_id));
    try {
        if (200) {
            await res.status(200).json({ success: { message: "A single user was successfully selected" }, data: foundUser, statusCode: 200 });
        }

    } catch (error) {
        res.status(404).json({ error: { message: "Resource can't be found." }, statusCode: 404 });
    }
};

//credit score (reading data)
const creditScore = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the credit score page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Credit score page can't be found." }, statusCode: 404 });
    }
};

//financial tracker (user can create, read, update, delete data in tracker)
const financialTracker = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the financial tracker page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Financial tracker page can't be found." }, statusCode: 404 });
    }
};

//resources
const resources = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the resources page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Resources page can't be found." }, statusCode: 404 });
    }
};

module.exports = { homePage, admin, creditScore, financialTracker, resources, allUsers, getUser };