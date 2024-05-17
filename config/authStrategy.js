const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oath20").Strategy;

const User = require("../model/signUpModel");

//implement Local strategy
passport.use(
  new LocalStrategy(function verify(username, password, done) {
    User.findOne({ username: username })
      .then((user) => {
        if (!user) {
          return don(null, false, { message: "User not found." });
        }
        bcrypt.compare(password, user.password, (error, result) => {
          console.log("result", result);
          if (error) {
            return done(error);
          }
          return done(null, user);
        });
      })
      .catch((error) => {
        console.log(
          `There was an error finding the user from the database: ${error}.`
        );
      });
  })
);

//implement Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    }
  )
);

//implement serializedUser and deserializedUser
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
