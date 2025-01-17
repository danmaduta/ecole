const passport = require("passport");
const GoogleStrategy = require("@passport-next/passport-google-oauth2")
  .Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const user = mongoose.model("User");

passport.serializeUser((User, done) => {
  done(null, User.id);
});

passport.deserializeUser((id, done) => {
  user.findById(id).then(User => {
    done(null, User);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await user.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new user({
        googleId: profile.id,
        displayName: profile.displayName
      }).save();
      done(null, newUser);
    }
  )
);
