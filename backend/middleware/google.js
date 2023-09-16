const passport = require('passport');
const User = require('../model/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()

passport.use(new GoogleStrategy({
    clientID: process.env.Google_clientID,
    clientSecret: process.env.Google_clientSecret, 
    callbackURL: process.env.Google_callbackURL
  },

  async function(accessToken, refreshToken, profile, cb) {
    try {
        const user = await User.findOne({googleId: profile.id}).exec()

        if (!user){
            const newUser = new User({
                name: profile.displayName,
                email : profile.emails[0].value,
                password: "123"
            })
            await newUser.save()
            return cb(null, newUser)
        }
        return cb(null, user)
    } catch(err){
        return cb(err)
    }
  }
));