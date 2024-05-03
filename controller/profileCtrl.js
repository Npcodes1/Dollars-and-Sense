//Profile Controller

const profile = async (req, res, next) => {
    try {
        await res.status(200).json({ success: { message: "This is the profile page" }, statusCode: 200 });
        
    } catch (error) {
        res.status(404).json({ error: { message: "Profile page can't be found." }, statusCode: 404 });
    }
};

module.exports = profile;
