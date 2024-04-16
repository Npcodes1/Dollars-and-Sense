//siteCtrl contains all the handler (callback) functions to be used for the routes in siteRouter.

//summon the mock database file
const usersData = require("../data/usersData");


//admin
const admin = async (req, res, next) => {
    try {
        if (200) {
            res.status(200).json({ success: { message: "This is the admin page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Admin page can't be found." }, statusCode: 404 });
    }
    
}

//credit score
//(req, res, next) => {
    // res.status(200).json({ success: { message: "This is the credit score page" }, statusCode: 200 });
// }

//financial tracker
// (req, res, next) => {;
//     res.status(200).json({ success: { message: "This is the financial tracker page" }, statusCode: 200 });
// }

//forgot-login
//(req, res, next) => { 
//     res.status(200).json({ success: { message: "This is the forgot login page "}, statusCode: 200 });
// // }

// //login
// (req, res, next) => {
//     res.status(200).json({ success: { message: "This is the login" }, statusCode: 200 });
// }

//all users
// (req, res, next) => {
//     let allUsers = request.params;
//     
// }

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

//resources
// // (req, res, next) => {
//     res.status(200).json({ success: { message: "This is the resources page" }, statusCode: 200 });
// }

module.exports = { admin, allUsers };