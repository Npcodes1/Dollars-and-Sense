
//summon the mock database file
const formData = require("../data/formData");

//forgot-login (user can create, edit, and delete)
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

module.exports = { forgotLogin, login };