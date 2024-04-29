
//summon the mock database file for form inputs
const messageData = require("../data/messageData");

//summon the mock database file for users
const signUpData = require("../data/signUpData");

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

//Local login
const localLogin = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "User logged in." }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "User couldn't be logged in." }, statusCode: 404 });
    }
};

//Login Failed
const loginFailed = async (req, res, next) => {
    res.status(401).json({ success: { error: "User or password was incorrect. Please try again." }, statusCode: 401 });  
};

// //Logout request -not working
// const logOutRequest = async (req, res, next) => {
//   req.logout((error) => {
//     if (error) {
//         res.status(400).json({ error: { message: "There was a problem logging out." }, statusCode: 400 });            
//         } else {
//                 res.status(200).json({ success: { message: "User successfully logged out" }, statusCode: 200 });
//         }
//     });
// };

//SignUp Request- not working
// const signUpRequest = async (req, res, next) => {
//     const { firstName, lastName, email, password } = req.body;
//     if (error) {
//         return next(error);
//     }
//     const newUser = new User({
//         firstName,
//         lastName,
//         email,
//         password
//     });

//     try {
//         newUser.save();
//         res.status(201).json({ success: { message: "New User has been created." }, data: { firstName, lastName, email }, statusCode: 201 });
//     } catch (error) {
//         res.status(500).json({ error: { message: "Internal server error." }, statusCode: 500 });
//     }
// }


//Admin access to get all users
const getAllUsers = async (req, res, next) => {

    try {
        await User.find({}).then(users => res.status(200).json({ success: { message: "Reference the users and list all of them." }, data: signUpData, statusCode: 200 }));
        
    } catch (error) {
        res.status(404).json({ error: { message: "Users can't be found. Try again." }, statusCode: 404 });
    }
};

//single user
const getUser = async (req, res, next) => {
    const { _id } = req.params;
    const foundUser = signUpData.find(usersData => usersData._id === Number(_id));
    try {
        if (200) {
            await res.status(200).json({ success: { message: "A single user was successfully selected" }, data: foundUser, statusCode: 200 });
        }

    } catch (error) {
        res.status(404).json({ error: { message: "User can't be found." }, statusCode: 404 });
    }
};

//forgot-login
const forgotLogin = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "This is the forgot login page" }, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Forgot login page can't be found." }, statusCode: 404 });
    }
};

// getAllMessages- Admin access
const getAllMessages = async (req, res, next) => {
    try {
        if (200) {
            await res.status(200).json({ success: { message: "Reference the messages from the contact form and list all of them." }, data: messageData, statusCode: 200 });
        }
        
    } catch (error) {
        res.status(404).json({ error: { message: "Users can't be found. Try again." }, statusCode: 404 });
    }
};

const getMessage = async (req, res, next) => {
    const { _id } = req.params;
    const foundMessage = signUpData.find(messageData => messageData._id === Number(_id));
    try {
        if (200) {
            await res.status(200).json({ success: { message: "A single user was successfully selected" }, data: foundMessage, statusCode: 200 });
        }

    } catch (error) {
        res.status(404).json({ error: { message: "Resource can't be found." }, statusCode: 404 });
    }
};

module.exports = { login, localLogin, loginFailed, signUpRequest, getAllUsers, getUser, forgotLogin, getAllMessages, getMessage };
