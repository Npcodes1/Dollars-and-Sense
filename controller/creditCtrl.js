//Credit Score Controller

const creditScore = async (req, res, next) => {
    try {
        await res.status(200).json({ success: { message: "This is the credit score page" }, statusCode: 200 });
        
    } catch (error) {
        res.status(404).json({ error: { message: "Credit score page can't be found." }, statusCode: 404 });
    }
};

//exporting handler function
module.exports = creditScore;