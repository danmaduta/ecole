const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('User');

passport.serializeUser((User, done) => {
    done(null, User.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id)
        .then(User => {
            done(null, User);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        user.findOne({ googleId: profile.id})
            .then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                } else {
                    new user({ googleId: profile.id, displayName: profile.displayName})
                        .save()
                        .then(newUser => done(null, newUser));
                }
            });

        
    })
);

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    user.findOne({ facebookId: profile.id})
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new user({ facebookId: profile.id, displayName: profile.displayName})
                .save()
                .then(newUser => done(null, newUser));
            }
        })
}))
