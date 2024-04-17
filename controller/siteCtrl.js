//siteCtrl contains all the handler (callback) functions to be used for the routes in siteRouter.

//summon the mock database file
const usersData = require("../data/usersData");

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
            await res.status(200).json({ success: { message: "This is the admin page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Admin page can't be found." }, statusCode: 404 });
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

//forgot-login (user can create, de)
const forgotLogin = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the forgot login page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Forgot login page can't be found." }, statusCode: 404 });
    }
};

//login
const login = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the login page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Login page can't be found." }, statusCode: 404 });
    }
};

//all users
//     let allUsers = request.params; ??

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
// (req, res, next) => {
//     // let allUsers = request.params;
//     // let singleUser = allUsers.id;
//     // console.log(singleUser);
//     res.status(200).json({ success: { message: "A single user was successfully selected" }, statusCode: 200 });
// }

const getUser = async (req, res, next) => {

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

module.exports = { homePage, admin, allUsers, creditScore, financialTracker, forgotLogin, login, resources };